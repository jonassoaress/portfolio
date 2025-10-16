import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { skills } from "@/data/skills";
import { fetchGithubProjects } from "@/lib/github";
import { getDictionaryForCurrentRequest } from "@/lib/i18n";
import Link from "next/link";

export default async function AboutPage() {
  const [[frontendSkills, backendSkills, toolSkills], [projects, dictionary]] =
    await Promise.all([
      Promise.resolve([
        skills.filter((s) => s.category === "frontend"),
        skills.filter((s) => s.category === "backend"),
        skills.filter((s) => s.category === "tools"),
      ]),
      Promise.all([fetchGithubProjects(), getDictionaryForCurrentRequest()]),
    ]);

  const skillsByCategory = {
    frontend: frontendSkills,
    backend: backendSkills,
    tools: toolSkills,
  };

  const projectCount = projects.length;
  const aboutDictionary = dictionary.aboutPage;
  const metricsItems = aboutDictionary.metrics.items.map((item) => ({
    value: item.value.replace("{projectCount}", projectCount.toString()),
    description: item.description,
  }));

  return (
    <main className="bg-muted/10">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10 mx-auto px-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
            {aboutDictionary.badge}
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {aboutDictionary.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {aboutDictionary.description}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">
                {aboutDictionary.story.title}
              </CardTitle>
              <CardDescription>
                {aboutDictionary.story.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-neutral max-w-none space-y-4 text-muted-foreground">
              {aboutDictionary.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle>{aboutDictionary.metrics.title}</CardTitle>
              <CardDescription>
                {aboutDictionary.metrics.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              {metricsItems.map((item) => (
                <div key={item.description}>
                  <p className="text-2xl font-semibold text-foreground">
                    {item.value}
                  </p>
                  <p>{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto space-y-10 px-6">
          <div className="flex flex-col gap-4 text-center">
            <Badge
              variant="outline"
              className="mx-auto rounded-full px-4 py-1 text-sm"
            >
              {aboutDictionary.skills.badge}
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              {aboutDictionary.skills.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {aboutDictionary.skills.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-primary">⚡</span>{" "}
                  {aboutDictionary.skills.frontendTitle}
                </CardTitle>
                <CardDescription>
                  {aboutDictionary.skills.frontendDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.frontend.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-sm"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-secondary">🔧</span>{" "}
                  {aboutDictionary.skills.backendTitle}
                </CardTitle>
                <CardDescription>
                  {aboutDictionary.skills.backendDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.backend.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-sm"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-accent">🛠️</span>{" "}
                  {aboutDictionary.skills.toolsTitle}
                </CardTitle>
                <CardDescription>
                  {aboutDictionary.skills.toolsDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skillsByCategory.tools.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-sm"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle>{aboutDictionary.interests.title}</CardTitle>
              <CardDescription>
                {aboutDictionary.interests.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {aboutDictionary.interests.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-lg border border-border/60 p-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle>{aboutDictionary.nextSteps.title}</CardTitle>
              <CardDescription>
                {aboutDictionary.nextSteps.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>{aboutDictionary.nextSteps.body}</p>
              <Separator />
              <Button asChild>
                <Link href="/contato">{aboutDictionary.nextSteps.button}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
