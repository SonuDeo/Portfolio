"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, staggerItem } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { recruiterTraits } from "@/lib/data";

export function Recruiters() {
  return (
    <section
      id="recruiters"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Recruiters Hire Me"
          title="Six reasons I'll add value from week one"
          description="The signal behind the skills — what I actually bring to a data or automation team."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recruiterTraits.map((trait) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group glass border-glow relative flex flex-col gap-4 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[hsl(var(--glow-a)/0.18)] to-[hsl(var(--glow-b)/0.18)] text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-gradient-brand">
                    <AnimatedCounter
                      value={trait.metric}
                      suffix={trait.suffix}
                    />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {trait.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground/80">
                    {trait.metricLabel}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {trait.description}
                </p>
                {/* animated bottom accent */}
                <span className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[hsl(var(--glow-a))] to-[hsl(var(--glow-b))] transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
