import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="container-px flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-display text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[hsl(var(--glow-a))] to-[hsl(var(--glow-b))] text-primary-foreground">
            SK
          </span>
          <span>Sonu Kumar</span>
        </div>

        <p className="order-3 text-center text-sm text-muted-foreground md:order-2">
          © {new Date().getFullYear()} Sonu Kumar. Built with Next.js, Tailwind &
          Framer Motion.
        </p>

        <div className="order-2 flex items-center gap-2 md:order-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-[18px] w-[18px]" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-secondary/50 transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
