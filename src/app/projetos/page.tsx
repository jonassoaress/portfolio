import ProjectsGallery from "@/components/sections/ProjectsGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { githubProfileUrl, githubUsername } from "@/config/site";
import { getProjects } from "@/data/projects";
import { Github } from "lucide-react";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="bg-muted/10">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10 mx-auto px-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
            Portfólio
          </Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meus projetos favoritos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Uma coleção dos meus trabalhos mais recentes, destacando soluções em
            frontend, backend e aplicações completas.
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
                Quer ver mais?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Confira meu GitHub para descobrir outros projetos, estudos e
                contribuições open source.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5" /> Visitar @{githubUsername}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
