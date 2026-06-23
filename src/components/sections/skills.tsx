"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, staggerItem } from "@/components/motion/reveal";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-72 max-w-4xl -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow-b)/0.12),transparent)] blur-2xl" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills & Stack"
          title="A toolkit spanning data, AI and engineering"
          description="Six focused domains — from cleaning messy data to shipping LLM-powered automations."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group glass border-glow relative flex flex-col overflow-hidden rounded-2xl p-6"
              >
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-25`}
                />
                <span
                  className={`mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {cat.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/70 bg-secondary/50 px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-primary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
