"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

const SOCIALS = [
  {
    icon: { mobile: 18, desktop: 22 },
    iconComponent: Github,
    label: "GitHub",
    handle: "@frnzdev",
    href: "https://github.com/frnzdev",
    color: "#e2e8f0",
    description: "Veja meus projetos e contribuicoes",
  },
  {
    icon: { mobile: 18, desktop: 22 },
    iconComponent: Linkedin,
    label: "LinkedIn",
    handle: "Felipe Fornazeiro",
    href: "https://linkedin.com/in/felipefornazeiro7",
    color: "#0a66c2",
    description: "Conecte-se comigo profissionalmente",
  },
  {
    icon: { mobile: 18, desktop: 22 },
    iconComponent: Mail,
    label: "E-mail",
    handle: "felipeacfornazeiro@gmail.com",
    href: "mailto:felipeacfornazeiro@gmail.com",
    color: "#a78bfa",
    description: "Me mande um e-mail diretamente",
  },
];

export function Contact() {
  const ref = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.05) 50%, transparent 100%)",
      }}
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        style={{ background: "rgba(124,58,237,0.1)" }}
      />

      <div className="relative mx-auto max-w-3xl">
        <SectionTitle
          label="// contato"
          title="Vamos "
          highlight="conversar"
          description="Estou em busca de oportunidades como Desenvolvedor Junior ou Estagiario em Backend. Tem uma vaga, projeto ou so quer trocar uma ideia? Entre em contato!"
        />

        <div ref={ref} className="fade-in-up space-y-3 sm:space-y-4">
          {SOCIALS.map(
            ({
              iconComponent: Icon,
              icon,
              label,
              handle,
              href,
              color,
              description,
            }) => (
              <a
                key={label}
                href={href}
                target={label !== "E-mail" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="gradient-border flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] sm:gap-5 sm:p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 sm:rounded-xl"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    color,
                  }}
                >
                  <Icon size={icon.mobile} className="sm:hidden" />
                  <Icon size={icon.desktop} className="hidden sm:block" />
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-[10px] font-medium sm:text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold text-white">
                    {handle}
                  </p>
                  <p
                    className="text-[10px] sm:text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {description}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs font-medium"
                  style={{ color }}
                >
                  {`->`}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
