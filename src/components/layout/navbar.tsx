"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-[1100px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "glass shadow-lg shadow-black/5"
            : "border border-transparent",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2 pl-1 font-display text-sm font-bold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[hsl(var(--glow-a))] to-[hsl(var(--glow-b))] text-primary-foreground">
            SK
          </span>
          <span className="hidden sm:inline">Sonu Kumar</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 text-foreground transition-colors hover:border-primary/50 sm:grid"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <ThemeToggle />
          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden md:inline-flex"
          >
            Hire me
          </ButtonLink>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-[72px] w-[calc(100%-2rem)] max-w-[1100px] md:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3 shadow-xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-foreground/90 transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 w-full"
              >
                Hire me
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
