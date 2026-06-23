"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { timeline } from "@/lib/data";

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience & Education"
          title="The path so far"
          description="Hands-on industry simulation alongside a computer science foundation."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-[hsl(var(--glow-a))] via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const Icon = item.type === "experience" ? Briefcase : GraduationCap;
              const left = i % 2 === 0;
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div
                    className={`relative flex flex-col gap-4 sm:flex-row ${
                      left ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* node */}
                    <div className="absolute left-0 top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                      <motion.span
                        whileInView={reduce ? {} : { scale: [0.6, 1] }}
                        className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary shadow-lg"
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>
                    </div>

                    {/* spacer for the other half on desktop */}
                    <div className="hidden sm:block sm:w-1/2" />

                    <div
                      className={`ml-14 sm:ml-0 sm:w-1/2 ${
                        left ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                      }`}
                    >
                      <div className="glass border-glow inline-block w-full rounded-2xl p-5 text-left">
                        <span className="inline-flex rounded-full bg-secondary/60 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          {item.period}
                        </span>
                        <h3 className="mt-3 font-display text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {item.org}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {item.points.map((p) => (
                            <li
                              key={p}
                              className="flex gap-2 text-sm text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
