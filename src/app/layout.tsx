import { FaviconManager } from "@/components/layout/FaviconManager";
import Header from "@/components/layout/Header";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { detectLocale, getDictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await detectLocale();
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.site.title,
    description: dictionary.site.description,
    authors: [{ name: "Jonas Soares" }],
    openGraph: {
      title: dictionary.site.title,
      description: dictionary.site.description,
      type: "website",
    },
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await detectLocale();
  const dictionary = getDictionary(locale);
  const year = new Date().getFullYear().toString();
  const footerText = dictionary.site.footerText.replace("{year}", year);

  return (
    <html suppressHydrationWarning lang={dictionary.locale ?? locale}>
      <body
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <LocaleProvider locale={locale} dictionary={dictionary}>
          <ThemeProvider>
            <FaviconManager />
            <div className="relative flex min-h-screen flex-col bg-background text-foreground">
              <Header />
              <main className="flex-1 pt-20">{children}</main>
              <footer className="bg-primary py-8 text-primary-foreground">
                <div className="container mx-auto px-6 text-center">
                  <p className="text-primary-foreground/80">{footerText}</p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
