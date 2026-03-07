"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { ArrowUp } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const SOCIALS = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/frnzdev",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://linkedin.com/in/felipefornazeiro7",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:felipeacfornazeiro@gmail.com",
    label: "E-mail",
  },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative py-12 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              FF
            </span>
            <span>
              frnz<span className="gradient-text">dev</span>
            </span>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {NAV.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="h-px w-full max-w-sm"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          {/* Copyright */}
          <p
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Feito por Felipe Fornazeiro &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        className="absolute bottom-10 right-6 flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
        style={{
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.3)",
          color: "#a78bfa",
        }}
      >
        <ArrowUp size={15} />
      </button>
    </footer>
  );
}
