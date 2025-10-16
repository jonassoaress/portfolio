import ProjectsGallery from "@/components/sections/ProjectsGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { githubProfileUrl, githubUsername } from "@/config/site";
import { getProjects } from "@/data/projects";
import { getDictionaryForCurrentRequest } from "@/lib/i18n";
import { Github } from "lucide-react";

export default async function ProjectsPage() {
  const [projects, dictionary] = await Promise.all([
    getProjects(),
    getDictionaryForCurrentRequest(),
  ]);
  const projectsDictionary = dictionary.projectsPage;
  const ctaButtonLabel = projectsDictionary.ctaButton.replace(
    "{username}",
    githubUsername
  );

  return (
    <main className="bg-muted/10">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10 mx-auto px-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
            {projectsDictionary.badge}
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {projectsDictionary.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {projectsDictionary.description}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </section>

      <ProjectsGallery projects={projects} />

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <Card className="border-border/60 bg-card/80 text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold">
                {projectsDictionary.ctaTitle}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg">{projectsDictionary.ctaDescription}</p>
              <Button asChild size="lg" className="gap-2">
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5" /> {ctaButtonLabel}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
