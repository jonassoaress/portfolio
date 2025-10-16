"use client";

import { useTranslations } from "@/components/providers/locale-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { githubProfileUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();
  const headerDictionary = useTranslations("header");

  const navItems: NavItem[] = [
    { label: headerDictionary.nav.home, href: "/" },
    { label: headerDictionary.nav.projects, href: "/projetos" },
    { label: headerDictionary.nav.about, href: "/sobre" },
    { label: headerDictionary.nav.contact, href: "/contato" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between gap-4 px-6">
        <Link href="/" className="header-title inline-block">
          <div className="typewriter">Jonas Soares</div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "font-medium",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Separator orientation="vertical" className="h-6" />
          <ThemeToggle />
          <Button asChild size="sm" className="min-w-[110px]">
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" /> {headerDictionary.actions.github}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={headerDictionary.menu.open}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <SheetTitle className="text-left text-lg">
                  {headerDictionary.menu.title}
                </SheetTitle>
                <SheetClose aria-label={headerDictionary.menu.close} />
              </SheetHeader>
              <div className="flex flex-col gap-3 py-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <Separator className="my-4" />
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <a
                    href={githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />{" "}
                    {headerDictionary.actions.github}
                  </a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
