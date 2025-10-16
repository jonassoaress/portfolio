import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getFeaturedProjects } from "@/data/projects";
import { getSkillsByCategory } from "@/data/skills";
import { getDictionaryForCurrentRequest } from "@/lib/i18n";
import Link from "next/link";

export default async function Home() {
  const [featuredProjects, frontendSkills, backendSkills, dictionary] =
    await Promise.all([
      getFeaturedProjects(),
      Promise.resolve(getSkillsByCategory("frontend")),
      Promise.resolve(getSkillsByCategory("backend")),
      getDictionaryForCurrentRequest(),
    ]);
  const homeDictionary = dictionary.home;

  return (
    <main>
      <Hero dictionary={dictionary.hero} />

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto space-y-12 px-6">
          <div className="text-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
              {homeDictionary.featured.badge}
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground">
              {homeDictionary.featured.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {homeDictionary.featured.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/projetos">{homeDictionary.featured.viewAll}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/10 py-20">
        <div className="container mx-auto space-y-10 px-6">
          <div className="text-center">
            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
              {homeDictionary.skills.badge}
            </Badge>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground">
              {homeDictionary.skills.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {homeDictionary.skills.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-primary">⚡</span> Frontend
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {homeDictionary.skills.frontendDescription}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="rounded-full px-4 py-2 text-sm"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-secondary">🔧</span> Backend
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {homeDictionary.skills.backendDescription}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="rounded-full px-4 py-2 text-sm"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mx-auto max-w-2xl space-y-6 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/95 to-accent/95 p-12 shadow-2xl backdrop-blur-sm">
            <h2 className="text-4xl font-bold tracking-tight text-background">
              {homeDictionary.cta.title}
            </h2>
            <Separator className="mx-auto w-20 border-background/30" />
            <p className="text-lg text-background/90">
              {homeDictionary.cta.description}
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-foreground shadow-lg transition-transform hover:scale-105 hover:bg-background/90"
            >
              <Link href="/contato">{homeDictionary.cta.button}</Link>
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-20 bottom-0 mx-auto h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      </section>
    </main>
  );
}
