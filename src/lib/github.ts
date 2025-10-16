import { Project } from "@/types";
import { cache } from "react";

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  topics?: string[];
  html_url: string;
  homepage?: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  owner: {
    login: string;
  };
}

const DEFAULT_USERNAME = "jonassoaress";
const FEATURED_TOPICS = new Set(["featured", "destaque", "highlight"]);
const FRONTEND_KEYWORDS = [
  "frontend",
  "react",
  "nextjs",
  "vue",
  "svelte",
  "angular",
  "tailwindcss",
];
const BACKEND_KEYWORDS = [
  "backend",
  "nodejs",
  "express",
  "nestjs",
  "fastify",
  "fastapi",
  "django",
  "spring",
];
const EXCLUDED_REPOS = new Set([
  "jonassoaress",
  "portfolio",
  "jonassoaress.github.io",
]);

export const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const normalize = (value?: string | null) => value?.toLowerCase().trim();

const classifyProject = (repo: GitHubRepository): Project["type"] => {
  const topics = repo.topics?.map((topic) => normalize(topic) ?? "") ?? [];
  const language = normalize(repo.language);

  if (
    topics.some((topic) => FRONTEND_KEYWORDS.includes(topic)) ||
    (language && FRONTEND_KEYWORDS.includes(language))
  ) {
    return "frontend";
  }

  if (
    topics.some((topic) => BACKEND_KEYWORDS.includes(topic)) ||
    (language && BACKEND_KEYWORDS.includes(language))
  ) {
    return "backend";
  }

  return "fullstack";
};

const mapRepositoryToProject = (repo: GitHubRepository): Project => {
  const owner = repo.owner?.login ?? DEFAULT_USERNAME;
  const topics = repo.topics ?? [];
  const normalizedTopics = topics.map((topic) => topic.trim()).filter(Boolean);
  const tags =
    normalizedTopics.length > 0
      ? normalizedTopics.map((topic) =>
          topic
            .replace(/[-_]/g, " ")
            .replace(/\s+/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (letter) => letter.toUpperCase())
        )
      : [repo.language ?? "GitHub"];

  const formatTitle = (name: string) =>
    name
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return {
    id: repo.id.toString(),
    title: formatTitle(repo.name),
    description: repo.description ?? "",
    longDescription: repo.description ?? undefined,
    image: `https://opengraph.githubassets.com/1/${owner}/${repo.name}`,
    tags,
    githubUrl: repo.html_url,
    liveUrl: repo.homepage ?? undefined,
    type: classifyProject(repo),
    featured: normalizedTopics.some((topic) =>
      FEATURED_TOPICS.has(topic.toLowerCase())
    ),
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
  };
};

const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME;

interface AvatarOptions {
  size?: number;
}

export const getGithubAvatarUrl = (
  user: string = username,
  { size = 200 }: AvatarOptions = {}
) => {
  const normalizedUsername = user?.trim() || DEFAULT_USERNAME;
  const normalizedSize = Math.min(Math.max(size, 40), 400);

  return `https://avatars.githubusercontent.com/${encodeURIComponent(
    normalizedUsername
  )}?size=${normalizedSize}`;
};

export const fetchGithubProjects = cache(async (): Promise<Project[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers,
      next: { revalidate: 60 * 60 },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Não foi possível carregar os repositórios do GitHub (status ${response.status}).`
    );
  }

  const repositories = (await response.json()) as GitHubRepository[];

  return repositories
    .filter((repo) => !repo.fork && !EXCLUDED_REPOS.has(repo.name))
    .map(mapRepositoryToProject)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      const aDate = a.updatedAt ? Date.parse(a.updatedAt) : 0;
      const bDate = b.updatedAt ? Date.parse(b.updatedAt) : 0;

      return bDate - aDate;
    });
});
