import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Fornazeiro | Backend Developer",
  description:
    "Portfolio de Felipe Fornazeiro — desenvolvedor backend Java focado em Spring Boot, APIs REST e sistemas de autenticação.",
  authors: [{ name: "Felipe Fornazeiro" }],
  keywords: [
    "Java",
    "Spring Boot",
    "Backend",
    "Developer",
    "Portfolio",
    "Felipe Fornazeiro",
  ],
  openGraph: {
    title: "Felipe Fornazeiro | Backend Developer",
    description:
      "Desenvolvedor backend Java — APIs REST, Spring Security, JPA/Hibernate.",
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
