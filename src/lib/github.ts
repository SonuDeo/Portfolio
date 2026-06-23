import type { GitHubProfile, GitHubRepo } from "./types";
import { site } from "./data";

const GH_API = "https://api.github.com";

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  // Optional: set GITHUB_TOKEN in env to raise rate limits.
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

// Revalidate GitHub data hourly (ISR).
const REVALIDATE_SECONDS = 3600;

/** Fallback profile used when the GitHub API is unreachable / rate-limited. */
const FALLBACK_PROFILE: GitHubProfile = {
  login: site.githubUser,
  name: site.name,
  avatarUrl: "/sonu.jpg",
  bio: site.tagline,
  publicRepos: 30,
  followers: 0,
  following: 0,
  url: site.github,
};

export async function getGitHubProfile(): Promise<GitHubProfile> {
  try {
    const res = await fetch(`${GH_API}/users/${site.githubUser}`, {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) throw new Error(`GitHub profile ${res.status}`);
    const d = await res.json();
    return {
      login: d.login,
      name: d.name,
      avatarUrl: d.avatar_url,
      bio: d.bio,
      publicRepos: d.public_repos,
      followers: d.followers,
      following: d.following,
      url: d.html_url,
    };
  } catch {
    return FALLBACK_PROFILE;
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${GH_API}/users/${site.githubUser}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: REVALIDATE_SECONDS } },
    );
    if (!res.ok) throw new Error(`GitHub repos ${res.status}`);
    const data: unknown[] = await res.json();
    return (data as Record<string, unknown>[])
      .filter((r) => !r.fork && !r.archived)
      .map(
        (r): GitHubRepo => ({
          id: r.id as number,
          name: r.name as string,
          fullName: r.full_name as string,
          description: (r.description as string) ?? null,
          url: r.html_url as string,
          homepage: (r.homepage as string) || null,
          language: (r.language as string) ?? null,
          topics: (r.topics as string[]) ?? [],
          stars: (r.stargazers_count as number) ?? 0,
          forks: (r.forks_count as number) ?? 0,
          updatedAt: r.updated_at as string,
        }),
      );
  } catch {
    return [];
  }
}
