import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
