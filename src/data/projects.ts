import { fetchGithubProjects } from "@/lib/github";
import { Project } from "@/types";

export const getProjects = async (): Promise<Project[]> => {
  return fetchGithubProjects();
};

export const getFeaturedProjects = async (limit = 3): Promise<Project[]> => {
  const projects = await fetchGithubProjects();
  const featured = projects.filter((project) => project.featured);

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  const remaining = projects
    .filter((project) => !project.featured)
    .sort((a, b) => {
      const aDate = a.updatedAt ? Date.parse(a.updatedAt) : 0;
      const bDate = b.updatedAt ? Date.parse(b.updatedAt) : 0;
      return bDate - aDate;
    });

  return [...featured, ...remaining].slice(0, limit);
};

export const getProjectsByType = async (
  type: Project["type"]
): Promise<Project[]> => {
  const projects = await fetchGithubProjects();
  return projects.filter((project) => project.type === type);
};
