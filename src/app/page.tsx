import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { CaseStudies } from "@/components/sections/case-studies";
import { GithubShowcase } from "@/components/sections/github-showcase";
import { Recruiters } from "@/components/sections/recruiters";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { getGitHubProfile, getGitHubRepos } from "@/lib/github";
import { featuredRepoOrder } from "@/lib/data";
import type { GitHubRepo } from "@/lib/types";

// Rebuild static content hourly so GitHub data stays fresh.
export const revalidate = 3600;

function selectFeatured(repos: GitHubRepo[], limit = 9): GitHubRepo[] {
  if (repos.length === 0) return [];
  const byName = new Map(repos.map((r) => [r.name, r]));
  const picked: GitHubRepo[] = [];
  const seen = new Set<string>();

  // 1) Curated order first
  for (const name of featuredRepoOrder) {
    const r = byName.get(name);
    if (r && !seen.has(r.name)) {
      picked.push(r);
      seen.add(r.name);
    }
  }

  // 2) Fill the rest by stars, then recency, skipping the profile repo.
  const rest = repos
    .filter((r) => !seen.has(r.name) && r.name.toLowerCase() !== "sonudeo")
    .sort(
      (a, b) =>
        b.stars - a.stars ||
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );

  for (const r of rest) {
    if (picked.length >= limit) break;
    picked.push(r);
  }

  return picked.slice(0, limit);
}

export default async function HomePage() {
  const [profile, repos] = await Promise.all([
    getGitHubProfile(),
    getGitHubRepos(),
  ]);
  const featured = selectFeatured(repos);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <GithubShowcase repos={featured} profile={profile} />
        <Recruiters />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
