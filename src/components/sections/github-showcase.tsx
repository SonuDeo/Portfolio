"use client";

import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  ArrowUpRight,
  Github,
  BookMarked,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, staggerItem, Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/data";
import type { GitHubProfile, GitHubRepo } from "@/lib/types";

const langColor: Record<string, string> = {
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export function GithubShowcase({
  repos,
  profile,
}: {
  repos: GitHubRepo[];
  profile: GitHubProfile;
}) {
  const totalStars = repos.reduce((s, r) => s + r.stars, 0);

  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Open Source"
          title="Live from my GitHub"
          description="Featured repositories fetched directly from github.com/SonuDeo — analytics, machine learning and automation projects."
        />

        {/* Profile summary */}
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="glass flex flex-col items-center gap-6 rounded-2xl p-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[hsl(var(--glow-a))] to-[hsl(var(--glow-b))] text-white">
                <Github className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display font-semibold">@{profile.login}</p>
                <p className="text-sm text-muted-foreground">
                  {profile.bio ?? site.tagline}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <Stat
                icon={<BookMarked className="h-4 w-4" />}
                value={profile.publicRepos}
                label="Repos"
              />
              <Stat
                icon={<Star className="h-4 w-4" />}
                value={totalStars}
                label="Stars"
              />
              <Stat
                icon={<Users className="h-4 w-4" />}
                value={profile.followers}
                label="Followers"
              />
            </div>
          </div>
        </Reveal>

        {repos.length === 0 ? (
          <Reveal className="mt-10 text-center">
            <p className="text-muted-foreground">
              Live repositories are temporarily unavailable.{" "}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Browse them on GitHub →
              </a>
            </p>
          </Reveal>
        ) : (
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group glass border-glow relative flex flex-col rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground transition-colors group-hover:text-primary">
                    <BookMarked className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold leading-snug">
                  {prettify(repo.name)}
                </h3>
                <p className="mt-1.5 line-clamp-3 flex-1 text-sm text-muted-foreground">
                  {repo.description ?? "Code, notebooks and experiments."}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background: langColor[repo.language] ?? "#8b8b8b",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" /> {repo.stars}
                    </span>
                  )}
                  {repo.forks > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </Stagger>
        )}

        <Reveal className="mt-12 flex justify-center">
          <ButtonLink
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <Github className="h-4 w-4" /> View all repositories
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex items-center gap-1 font-display text-xl font-bold">
        {icon}
        <AnimatedCounter value={value} />
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function prettify(name: string) {
  return name.replace(/[-_]/g, " ");
}
