"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  TrendingUp,
  Bot,
  Database,
} from "lucide-react";
import { DataStream } from "@/components/backgrounds/data-stream";
import { ButtonLink } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { site, heroStats } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Animated background */}
      <DataStream className="absolute inset-0 -z-10 h-full w-full opacity-70" />
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow-a)/0.28),transparent)] blur-2xl" />

      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Data Analyst &amp; AI Automation roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Transforming Data Into{" "}
            <span className="text-gradient-brand">Intelligent Business</span>{" "}
            Decisions
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <ButtonLink href="#work" size="lg">
              View Projects <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href={site.resume}
              variant="outline"
              size="lg"
              download
            >
              <Download className="h-4 w-4" /> Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost" size="lg">
              <Mail className="h-4 w-4" /> Contact Me
            </ButtonLink>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dd className="font-display text-2xl font-bold sm:text-3xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="text-xs leading-snug text-muted-foreground">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Right: portrait + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          {/* gradient ring */}
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[hsl(var(--glow-a)/0.5)] via-transparent to-[hsl(var(--glow-b)/0.5)] blur-xl" />

          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-2xl">
            <Image
              src={site.photo}
              alt="Sonu Kumar — Data Analyst & AI Automation Engineer"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 380px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-display text-lg font-semibold text-white drop-shadow">
                Sonu Kumar
              </p>
              <p className="text-sm text-white/80 drop-shadow">
                {site.role}
              </p>
            </div>
          </div>

          {/* floating cards */}
          <FloatingCard
            className="-left-6 top-10 sm:-left-10"
            delay={0.6}
            icon={<TrendingUp className="h-4 w-4 text-emerald-400" />}
            title="Power BI"
            subtitle="1,000+ records"
          />
          <FloatingCard
            className="-right-4 top-1/3 sm:-right-12"
            delay={0.8}
            icon={<Bot className="h-4 w-4 text-violet-400" />}
            title="AI Pipeline"
            subtitle="Make.com · OpenAI"
          />
          <FloatingCard
            className="-left-4 bottom-12 sm:-left-12"
            delay={1}
            icon={<Database className="h-4 w-4 text-sky-400" />}
            title="SQL · Python"
            subtitle="Clean, modeled data"
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex">
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={reduce ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  subtitle,
  delay = 0,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className={`absolute z-10 ${className}`}
    >
      <motion.div
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 shadow-xl"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary">
          {icon}
        </span>
        <span className="pr-1">
          <span className="block text-xs font-semibold leading-tight">
            {title}
          </span>
          <span className="block text-[11px] leading-tight text-muted-foreground">
            {subtitle}
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}
