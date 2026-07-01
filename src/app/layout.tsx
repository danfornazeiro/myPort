import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Fornazeiro | Técnico em Desenvolvimento de Sistemas",
  description:
    "Portfólio de Felipe Fornazeiro — estudante de Análise e Desenvolvimento de Sistemas, com experiência prática em aplicações Full Stack, APIs REST, Java, Spring Boot, React e Next.js.",
  authors: [{ name: "Felipe Fornazeiro" }],
  keywords: [
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Desenvolvimento Full Stack",
    "Portfolio",
    "Felipe Fornazeiro",
  ],
  openGraph: {
    title: "Felipe Fornazeiro | Técnico em Desenvolvimento de Sistemas",
    description:
      "Estudante de ADS e Técnico em Desenvolvimento de Sistemas com projetos em Java, Spring Boot, Angular, React, Next.js e SQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
