"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas "data stream" / neural-flow background.
 * - Particles drift upward like flowing data
 * - Nearby particles connect with faint lines (network effect)
 * - Pauses when offscreen and respects prefers-reduced-motion
 * Designed to stay cheap so it never hurts Core Web Vitals.
 */
export function DataStream({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const css = getComputedStyle(document.documentElement);
    const readHsl = (name: string) =>
      css.getPropertyValue(name).trim() || "245 90% 68%";
    let glowA = readHsl("--glow-a");
    let glowB = readHsl("--glow-b");

    function makeParticles() {
      const area = width * height;
      const count = Math.min(90, Math.max(28, Math.floor(area / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.15 + Math.random() * 0.45),
        r: 0.6 + Math.random() * 1.8,
      }));
    }

    function resize() {
      const parent = canvas!.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      glowA = readHsl("--glow-a");
      glowB = readHsl("--glow-b");
      makeParticles();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < 130 * 130) {
            const alpha = (1 - Math.sqrt(dist2) / 130) * 0.22;
            ctx!.strokeStyle = `hsl(${glowA} / ${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        grad.addColorStop(0, `hsl(${glowB} / 0.9)`);
        grad.addColorStop(1, `hsl(${glowB} / 0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    resize();

    if (reduce) {
      draw(); // single static frame
    } else {
      loop();
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !reduce;
        if (running) loop();
        else cancelAnimationFrame(raf);
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ pointerEvents: "none" }}
    />
  );
}
