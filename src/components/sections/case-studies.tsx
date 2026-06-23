"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Network,
  Trophy,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies, type CaseStudy } from "@/lib/data";

export function CaseStudies() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Case Studies"
          title="Selected work, told as stories"
          description="Two flagship builds — from the business problem to the architecture, the results, and what I learned."
        />

        <div className="mt-14 flex flex-col gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.05}>
              <CaseStudyCard study={cs} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <article className="glass border-glow relative overflow-hidden rounded-3xl">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${study.accent}`}
      />
      <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: headline + metrics */}
        <div className="flex flex-col justify-between gap-6 p-7 sm:p-9">
          <div>
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full bg-gradient-to-r ${study.accent} px-3 py-1 text-xs font-semibold text-white`}
              >
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-muted-foreground">
                {study.year}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-tight sm:text-2xl">
              {study.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              {study.tagline}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border/60 bg-secondary/40 p-3"
              >
                <p className="font-display text-lg font-bold leading-none">
                  {m.value}
                </p>
                <p className="mt-1.5 text-[11px] leading-tight text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {study.stack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border/70 bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: expandable detail */}
        <div className="border-t border-border/60 p-7 sm:p-9 lg:border-l lg:border-t-0">
          <Block icon={Target} title="Challenge" accent={study.accent}>
            {study.challenge}
          </Block>
          <Block icon={Lightbulb} title="Solution" accent={study.accent}>
            {study.solution}
          </Block>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
            aria-expanded={open}
          >
            {open ? "Show less" : "Architecture, results & lessons"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5">
                  <Block icon={Network} title="Architecture" accent={study.accent}>
                    <ul className="mt-1 space-y-1.5">
                      {study.architecture.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block icon={Trophy} title="Results" accent={study.accent}>
                    <ul className="mt-1 space-y-1.5">
                      {study.results.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block
                    icon={GraduationCap}
                    title="Lessons Learned"
                    accent={study.accent}
                  >
                    {study.lessons}
                  </Block>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

function Block({
  icon: Icon,
  title,
  children,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center gap-2">
        <span
          className={`grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br ${accent} text-white`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
