import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { githubUsername } from "@/config/site";
import { getGithubAvatarUrl } from "@/lib/github";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const avatarUrl = getGithubAvatarUrl(githubUsername, { size: 256 });

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 py-16">
      <div className="container relative z-10 mx-auto px-6">
        <Card className="mx-auto max-w-4xl border-border/60 bg-card/80 backdrop-blur">
          <CardContent className="flex flex-col items-center gap-8 p-10 text-center">
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 text-sm font-medium"
            >
              Desenvolvedor Full Stack
            </Badge>

            <Avatar className="size-28 border-4 border-primary/30 shadow-lg">
              <AvatarImage
                src={avatarUrl}
                alt={`Avatar do GitHub de ${githubUsername}`}
              />
              <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-3xl font-bold text-primary-foreground">
                JS
              </AvatarFallback>
            </Avatar>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Olá, eu sou
                <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Jonas Soares dos Santos
                </span>
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl">
                Construindo experiências web modernas e escaláveis com React,
                Next.js e Node.js. Apaixonado por código limpo e soluções
                criativas.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link href="/projetos">Ver Projetos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-w-[160px]"
              >
                <Link href="/contato">Entre em Contato</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="size-10 rounded-full"
                aria-label="GitHub"
              >
                <a
                  href="https://github.com/jonassoaress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="ghost"
                className="size-10 rounded-full"
                aria-label="LinkedIn"
              >
                <a
                  href="https://linkedin.com/in/jonassoaress"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-20 bottom-0 mx-auto h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
      </div>
    </section>
  );
}
