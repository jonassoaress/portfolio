"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/types";
import { useMemo, useState } from "react";

type FilterValue = "all" | Project["type"];

interface ProjectsGalleryProps {
  projects: Project[];
}

const LABELS: Record<FilterValue, string> = {
  all: "Todos",
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filters = useMemo(() => {
    const counts = projects.reduce((acc, project) => {
      acc[project.type] = (acc[project.type] ?? 0) + 1;
      return acc;
    }, {} as Record<Project["type"], number>);

    const allCount = projects.length;

    return (Object.keys(LABELS) as FilterValue[]).map((value) => ({
      value,
      label: LABELS[value],
      count: value === "all" ? allCount : counts[value] ?? 0,
    }));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter, projects]);

  const hasProjects = filteredProjects.length > 0;

  return (
    <>
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span>{filter.label}</span>
                <span className="text-xs opacity-80">({filter.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {hasProjects ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Nenhum projeto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
