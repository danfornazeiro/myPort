"use client";

import { Mail, Github, Linkedin, PhoneCall, MapPin, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";

const SOCIALS = [
  {
    icon: { mobile: 18, desktop: 22 },
    iconComponent: Github,
    label: "GitHub",
    handle: "eufrnz",
    href: "https://github.com/eufrnz",
    color: "#e2e8f0",
    description: "Veja meus projetos e contribuições",
  },
  {
    icon: { mobile: 18, desktop: 22 },
    iconComponent: Linkedin,
    label: "LinkedIn",
    handle: "Felipe Fornazeiro",
    href: "https://www.linkedin.com/in/felipefornazeiro7",
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
      className="relative py-20 px-4 sm:py-24 sm:px-6 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.06) 50%, transparent 100%)",
      }}
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        style={{ background: "rgba(96,165,250,0.12)" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <SectionTitle
          label="// contato"
          title="Vamos "
          highlight="conversar"
          description="Estou em busca de oportunidades como Jovem Aprendiz, Estagiário ou Desenvolvedor Júnior. Se fizer sentido para sua equipe, vamos conversar."
        />

        <div ref={ref} className="fade-in-up grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-surface gradient-border flex items-center gap-3 rounded-[1.35rem] p-4 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] sm:gap-5 sm:p-5"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12"
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
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold text-white">
                    {handle}
                  </p>
                  <p
                    className="text-[10px] sm:text-xs"
                    style={{ color: "rgba(255,255,255,0.48)" }}
                  >
                    {description}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs font-medium"
                  style={{ color }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </a>
            ),
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60 sm:mt-8">
          <span className="glass-surface inline-flex items-center gap-2 rounded-full px-4 py-2">
            <MapPin size={14} /> São Paulo - SP
          </span>
          <span className="glass-surface inline-flex items-center gap-2 rounded-full px-4 py-2">
            Disponível para projetos e oportunidades
          </span>
        </div>
      </div>
    </section>
  );
}
