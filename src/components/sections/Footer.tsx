"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { ArrowUp } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const SOCIALS = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/eufrnz",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://www.linkedin.com/in/felipefornazeiro7",
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
      className="relative py-10 px-4 sm:py-12 sm:px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <button
            onClick={scrollTop}
            className="glass-surface flex items-center gap-1.5 rounded-full px-3 py-2 text-base font-semibold text-white sm:gap-2 sm:px-4 sm:text-lg"
          >
            <span className="gradient-text">Felipe</span>
            <span>Fornazeiro</span>
          </button>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {NAV.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-xs transition-colors duration-200 hover:text-white sm:text-sm"
                style={{ color: "rgba(255,255,255,0.54)" }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {SOCIALS.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-surface flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:h-9 sm:w-9"
                style={{
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="h-px w-full max-w-sm"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          {/* Copyright */}
          <p
            className="flex items-center gap-1.5 text-[10px] sm:text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Feito por Felipe Fornazeiro &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollTop}
        aria-label="Voltar ao topo"
        className="glass-surface absolute bottom-6 right-4 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:bottom-10 sm:right-6 sm:h-9 sm:w-9"
        style={{
          color: "rgba(255,255,255,0.8)",
        }}
      >
        <ArrowUp size={14} className="sm:size-4" />
      </button>
    </footer>
  );
}
