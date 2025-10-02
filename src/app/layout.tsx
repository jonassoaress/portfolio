import Header from "@/components/layout/Header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <div className="pt-20">{children}</div>
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Jonas Soares. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
