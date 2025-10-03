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
import Link from "next/link";

export default async function AboutPage() {
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  const projects = await fetchGithubProjects();
  const projectCount = projects.length;

  return (
    <main className="bg-muted/10">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10 mx-auto px-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
            Sobre mim
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Construindo minha jornada no desenvolvimento de software
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Conheça minha trajetória como desenvolvedor iniciante, meus
            aprendizados e as tecnologias que estudo e aplico nos meus projetos.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">Minha história</CardTitle>
              <CardDescription>
                Os primeiros passos na minha carreira como desenvolvedor.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-neutral max-w-none space-y-4 text-muted-foreground">
              <p>
                Sou estudante do curso de Análise e Desenvolvimento de Sistemas
                na FATEC Mogi Mirim, no 6.º semestre.
              </p>
              <p>
                Atualmente, estou estagiando no departamento de desenvolvimento
                de software da Infonacci.
              </p>
              <p>
                Sou apaixonado por tecnologia e programação, e gosto de
                transformar ideias em soluções práticas por meio da programação.
              </p>
              <p>
                Tenho conhecimentos em várias linguagens de programação,
                facilidade para trabalhar em equipe, resolver problemas
                rapidamente e adaptar-me a novos desafios.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle>Em números</CardTitle>
              <CardDescription>
                Indicadores das minhas entregas e experiências recentes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="text-2xl font-semibold text-foreground">
                  {projectCount}
                </p>
                <p>
                  Projetos no GitHub entre iniciativas pessoais e de estudo.
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">2020</p>
                <p>Ano em que comecei minha jornada na programação.</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground">&lt;1</p>
                <p>
                  Ano de experiência profissional como estagiário em
                  desenvolvimento.
                </p>
              </div>
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
              Habilidades técnicas
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Soluções ponta a ponta
            </h2>
            <p className="text-lg text-muted-foreground">
              Do design de interfaces ao deploy, construo experiências completas
              com foco em resultados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/60 bg-card/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <span className="text-primary">⚡</span> Frontend
                </CardTitle>
                <CardDescription>
                  Interfaces ricas, responsivas e acessíveis para diferentes
                  dispositivos.
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
                  <span className="text-secondary">�</span> Backend
                </CardTitle>
                <CardDescription>
                  APIs escaláveis, arquitetura modular e foco em
                  observabilidade.
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
                  <span className="text-accent">🛠️</span> Ferramentas & DevOps
                </CardTitle>
                <CardDescription>
                  Automação, monitoramento e entrega contínua para acelerar
                  ciclos de produto.
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
              <CardTitle>Interesses</CardTitle>
              <CardDescription>
                O que me inspira a continuar evoluindo diariamente.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                {
                  icon: "📚",
                  title: "Aprendizado contínuo",
                  description:
                    "Sempre explorando novas tecnologias e boas práticas.",
                },
                {
                  icon: "🌐",
                  title: "Open source",
                  description:
                    "Compartilhando conhecimento e colaborando com a comunidade.",
                },
                {
                  icon: "🎨",
                  title: "UI/UX",
                  description:
                    "Criando interfaces intuitivas com foco na experiência.",
                },
                {
                  icon: "⚡",
                  title: "Performance",
                  description:
                    "Otimizando aplicações para serem rápidas e escaláveis.",
                },
              ].map((item) => (
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
              <CardTitle>Próximos passos</CardTitle>
              <CardDescription>
                Sempre buscando colaborar em projetos desafiadores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Curto o processo de transformar ideias em produtos reais. Se
                você tem um desafio e acredita que minha experiência pode
                ajudar, vamos conversar.
              </p>
              <Separator />
              <Button asChild>
                <Link href="/contato">Entre em contato</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
