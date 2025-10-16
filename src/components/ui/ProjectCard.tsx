"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { CalendarRange, ExternalLink, Github, Star } from "lucide-react";
import { useMemo } from "react";

interface ProjectCardProps {
  project: Project;
}

const typeVariant: Record<Project["type"], string> = {
  frontend: "bg-primary/15 text-primary",
  backend: "bg-secondary/20 text-secondary-foreground",
  fullstack: "bg-accent/15 text-accent-foreground",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { dictionary, locale } = useLocale();
  const projectCardDictionary = dictionary.projectCard;
  const resolvedLocale = dictionary.locale ?? locale;
  const projectTypeLabel =
    dictionary.projectsGallery.filters[project.type] ?? project.type;

  const dateFormatter = useMemo(() => {
    const intlLocale = resolvedLocale === "pt-BR" ? "pt-BR" : "en-US";

    return new Intl.DateTimeFormat(intlLocale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, [resolvedLocale]);

  const formattedDate = useMemo(() => {
    if (!project.updatedAt) return null;

    const date = new Date(project.updatedAt);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return dateFormatter.format(date);
  }, [dateFormatter, project.updatedAt]);

  const hasStars = typeof project.stars === "number" && project.stars >= 0;
  const projectDescription = project.description?.trim()
    ? project.description
    : projectCardDictionary.noDescription;

  return (
    <Card className="group overflow-hidden border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-primary/20">
          {project.title.charAt(0)}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent,rgba(0,0,0,0.35))] opacity-40" />
      </div>

      <CardHeader className="space-y-3">
        <Badge className={cn("w-fit px-3", typeVariant[project.type])}>
          {projectTypeLabel.toUpperCase()}
        </Badge>
        <CardTitle className="text-2xl font-semibold text-foreground">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {projectDescription}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-full">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="secondary" className="rounded-full">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {(formattedDate || hasStars) && (
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            {formattedDate && (
              <span className="inline-flex items-center gap-1">
                <CalendarRange className="size-4" />
                {projectCardDictionary.updatedOn.replace(
                  "{date}",
                  formattedDate
                )}
              </span>
            )}

            {hasStars && (
              <span className="inline-flex items-center gap-1">
                <Star className="size-4 fill-yellow-400 text-yellow-500" />
                {project.stars}
              </span>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-2 sm:flex-row">
        <Button asChild variant="outline" className="flex-1">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 size-4" /> {projectCardDictionary.github}
          </a>
        </Button>
        {project.liveUrl && (
          <Button asChild className="flex-1">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 size-4" />
              {projectCardDictionary.liveDemo}
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
