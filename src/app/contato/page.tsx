"use client";

import { useTranslations } from "@/components/providers/locale-provider";
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
  const contactDictionary = useTranslations("contactPage");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        console.error("Erro:", data.error);

        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
            {contactDictionary.badge}
          </Badge>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {contactDictionary.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {contactDictionary.description}
          </p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      </section>

      <section className="pb-20">
        <div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">
                {contactDictionary.info.title}
              </CardTitle>
              <CardDescription>
                {contactDictionary.info.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="flex items-start gap-3 rounded-lg border border-border/60 p-4">
                <Mail className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">
                    {contactDictionary.info.emailLabel}
                  </p>
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
                  <p className="font-semibold text-foreground">
                    {contactDictionary.info.locationLabel}
                  </p>
                  <p>{contactDictionary.info.locationValue}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-lg border border-border/60 p-4">
                <div className="flex items-center gap-2">
                  <Share2 className="size-5 text-accent" />
                  <p className="font-semibold text-foreground">
                    {contactDictionary.info.socialLabel}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://github.com/jonassoaress"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href="https://linkedin.com/in/jonassoaress"
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
                  {contactDictionary.info.projectPreferencesTitle}
                </p>
                <p>{contactDictionary.info.projectPreferencesDescription}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle className="text-3xl">
                {contactDictionary.form.title}
              </CardTitle>
              <CardDescription>
                {contactDictionary.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {contactDictionary.form.fields.nameLabel}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contactDictionary.form.fields.namePlaceholder}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    {contactDictionary.form.fields.emailLabel}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contactDictionary.form.fields.emailPlaceholder}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {contactDictionary.form.fields.messageLabel}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      contactDictionary.form.fields.messagePlaceholder
                    }
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
                      {contactDictionary.form.submitLoading}
                    </>
                  ) : (
                    contactDictionary.form.submitIdle
                  )}
                </Button>

                {status === "success" && (
                  <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-900/60 dark:bg-green-900/20 dark:text-green-100">
                    <CheckCircle2 className="size-4" />
                    <AlertDescription>
                      {contactDictionary.form.successMessage}
                    </AlertDescription>
                  </Alert>
                )}

                {status === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>
                      {contactDictionary.form.errorMessage}
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
