"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/ui/ProjectCard";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
    <section className="space-y-12 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <Card className="border-border/60 bg-card/80 backdrop-blur">
          <CardContent className="flex flex-col gap-6 p-4 sm:p-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold sm:text-xl">
                  Filtrar por categoria
                </h2>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Explore os projetos por área de atuação.
                </p>
              </div>
              <ToggleGroup
                type="single"
                value={activeFilter}
                onValueChange={(value) =>
                  value && setActiveFilter(value as FilterValue)
                }
                className="flex flex-wrap gap-2 sm:gap-3"
                variant="outline"
              >
                {filters.map((filter) => (
                  <ToggleGroupItem
                    key={filter.value}
                    value={filter.value}
                    className="flex items-center gap-1.5 px-3 py-2 sm:gap-2 sm:px-4"
                  >
                    <span className="text-xs font-medium sm:text-sm">
                      {filter.label}
                    </span>
                    <Badge
                      variant="secondary"
                      className="rounded-full px-1.5 text-[10px] sm:px-2 sm:text-xs"
                    >
                      {filter.count}
                    </Badge>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="container mx-auto px-6">
        {hasProjects ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <Card className="border-dashed border-border/60">
            <CardContent className="py-16 text-center">
              <h3 className="text-lg font-semibold">
                Nenhum projeto encontrado
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ajuste os filtros ou volte mais tarde para ver novos projetos.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
