"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Share2,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Aqui você implementaria a lógica de envio do formulário
    // Por exemplo, usando uma API route do Next.js ou um serviço como Formspree

    // Simulando envio
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="bg-muted/10">
      <section className="relative overflow-hidden py-20">
        <div className="container relative z-10 mx-auto px-6">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
            Vamos conversar
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tem um projeto em mente?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Fale comigo sobre ideias, oportunidades e desafios. Estou pronto
            para colaborar.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">Informações de contato</CardTitle>
              <CardDescription>
                Estou sempre aberto a discutir novos projetos e parcerias.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3 rounded-lg border border-border/60 p-4">
                <Mail className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">E-mail</p>
                  <a
                    href="mailto:jonassoares.live@gmail.com"
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    jonassoares.live@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg border border-border/60 p-4">
                <MapPin className="mt-1 size-5 text-secondary" />
                <div>
                  <p className="font-semibold text-foreground">Localização</p>
                  <p>São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg border border-border/60 p-4">
                <div className="flex items-center gap-2">
                  <Share2 className="size-5 text-accent" />
                  <p className="font-semibold text-foreground">Redes sociais</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://github.com/jonassantoss"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://linkedin.com/in/jonassant0s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="size-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="rounded-lg bg-muted/40 p-4 text-sm">
                <p className="font-medium text-foreground">
                  Preferências de projeto
                </p>
                <p>
                  Trabalhos remotos, times distribuídos, aplicações web modernas
                  (React/Next.js) e APIs escaláveis em Node.js.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">Envie uma mensagem</CardTitle>
              <CardDescription>
                Respondo normalmente dentro de 1 a 2 dias úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou dúvida"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />{" "}
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensagem"
                  )}
                </Button>

                {status === "success" && (
                  <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-900/60 dark:bg-green-900/20 dark:text-green-100">
                    <CheckCircle2 className="size-4" />
                    <AlertDescription>
                      Mensagem enviada com sucesso! Responderei em breve.
                    </AlertDescription>
                  </Alert>
                )}

                {status === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>
                      Ocorreu um erro. Por favor, tente novamente em alguns
                      instantes.
                    </AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
