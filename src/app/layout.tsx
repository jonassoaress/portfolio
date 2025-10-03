import { FaviconManager } from "@/components/layout/FaviconManager";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jonas Soares - Desenvolvedor Full Stack",
  description:
    "Portfólio de Desenvolvedor Full Stack especializado em React, Next.js e Node.js",
  authors: [{ name: "Jonas Soares" }],
  openGraph: {
    title: "Jonas Soares - Desenvolvedor Full Stack",
    description: "Portfólio de Desenvolvedor Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <ThemeProvider>
          <FaviconManager />
          <div className="relative flex min-h-screen flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1 pt-20">{children}</main>
            <footer className="bg-primary text-primary-foreground py-8">
              <div className="container mx-auto px-6 text-center">
                <p className="text-primary-foreground/80">
                  © {new Date().getFullYear()} Jonas Soares. Todos os direitos
                  reservados.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
