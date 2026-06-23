"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, staggerItem } from "@/components/motion/reveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials that back the skills"
          description="Industry programs from Deloitte, Microsoft and Anthropic."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -6, rotate: -0.4 }}
              className="group glass border-glow relative flex flex-col overflow-hidden rounded-2xl p-6"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${cert.accent} opacity-15 blur-xl transition-opacity group-hover:opacity-30`}
              />
              <div className="flex items-center justify-between">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${cert.accent} text-white shadow-lg`}
                >
                  <Award className="h-6 w-6" />
                </span>
                <BadgeCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {cert.issuer}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {cert.blurb}
              </p>
              <span className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/70">
                Issued {cert.year}
              </span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
