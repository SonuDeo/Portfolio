"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/sonu-45-kumar",
    href: site.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "@SonuDeo",
    href: site.github,
    icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <div className="glass border-glow relative overflow-hidden rounded-3xl p-8 sm:p-12">
            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow-a)/0.25),transparent)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow-b)/0.2),transparent)] blur-2xl" />

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for work
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Let&apos;s turn your data into{" "}
                  <span className="text-gradient-brand">decisions</span>.
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Hiring for a Data Analyst or AI Automation role? I&apos;d love
                  to talk. The fastest way to reach me is email — I usually
                  reply within a day.
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {site.location} · Open to remote
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href={`mailto:${site.email}`} size="lg">
                    <Mail className="h-4 w-4" /> Email me
                  </ButtonLink>
                  <ButtonLink
                    href={site.resume}
                    download
                    variant="outline"
                    size="lg"
                  >
                    <Download className="h-4 w-4" /> Resume
                  </ButtonLink>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {channels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -4 }}
                      className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur transition-colors hover:border-primary/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="block truncate text-sm font-medium">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
