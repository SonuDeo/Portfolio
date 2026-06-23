"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, GraduationCap, CircleDot } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { about, site } from "@/lib/data";

const factIcons = [MapPin, Compass, GraduationCap, CircleDot];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="About"
          title="From a single question to intelligent systems"
          description="The short version of how I ended up building data and automation systems for a living."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <blockquote className="mt-8 border-l-2 border-primary/60 pl-5 font-display text-lg italic text-foreground/90">
                &ldquo;{site.tagline}&rdquo;
              </blockquote>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {about.facts.map((fact, i) => {
                const Icon = factIcons[i % factIcons.length];
                return (
                  <motion.div
                    key={fact.label}
                    whileHover={{ y: -4 }}
                    className="glass border-glow relative flex flex-col gap-3 rounded-2xl p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[hsl(var(--glow-a)/0.18)] to-[hsl(var(--glow-b)/0.18)] text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-1 font-display text-sm font-semibold leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
