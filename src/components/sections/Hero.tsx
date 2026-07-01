"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { Github, Linkedin, ArrowDown, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Técnico em Desenvolvimento de Sistemas",
  "Estudante de Análise e Desenvolvimento de Sistemas",
  "APIs REST com Java e Spring Boot",
  "Full Stack com React e Next.js",
];

export function Hero() {
  const role = useTypewriter(ROLES, 75, 2200);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dot-grid px-4 py-24 text-center sm:px-6 md:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="liquid-orb liquid-orb--slow -top-28 left-[8%] h-56 w-56 sm:h-72 sm:w-72"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.22) 0%, rgba(96,165,250,0.05) 45%, transparent 72%)",
          }}
        />
        <div
          className="liquid-orb liquid-orb--medium right-[6%] top-[18%] h-44 w-44 sm:h-64 sm:w-64"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 42%, transparent 74%)",
          }}
        />
        <div
          className="liquid-orb liquid-orb--fast bottom-[14%] left-[18%] h-36 w-36 sm:h-52 sm:w-52"
          style={{
            background:
              "radial-gradient(circle, rgba(147,197,253,0.18) 0%, rgba(147,197,253,0.05) 44%, transparent 74%)",
          }}
        />
        <div
          className="liquid-orb liquid-orb--slow bottom-[10%] right-[18%] h-24 w-24 sm:h-40 sm:w-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 42%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-5 sm:gap-6 md:gap-8">
        <div className="relative">
          <div
            className="absolute -inset-0.5 rounded-full opacity-60 blur-md sm:-inset-1 sm:blur-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(96,165,250,0.9))",
            }}
          />
          <div className="glass-surface relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/15 sm:h-32 sm:w-32 md:h-40 md:w-40">
            <Image
              src="/minhaFoto.jpg"
              alt="Felipe Fornazeiro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div
          className="glass-surface flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium sm:px-4 sm:text-xs"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300" />
          Disponível para oportunidades como Jovem Aprendiz, Estagiário ou Júnior
        </div>

        <h1 className="px-4 text-4xl font-semibold tracking-tight text-white xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          Felipe <span className="gradient-text">Fornazeiro</span>
        </h1>

        <p
          className="h-8 text-base font-medium sm:h-10 sm:text-xl md:text-2xl"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          {role}
          <span className="animate-pulse">|</span>
        </p>

        <p
          className="max-w-2xl px-4 text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.62)" }}
        >
          Estudante de Análise e Desenvolvimento de Sistemas e Técnico em Desenvolvimento de Sistemas, com experiência prática em aplicações Full Stack e APIs REST.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 px-4 text-xs sm:gap-3 sm:text-sm">
       
          <span className="glass-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-white/80">
            <Mail size={14} />
            felipeacfornazeiro@gmail.com
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="glass-surface rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(96,165,250,0.18))",
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="glass-surface rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
            style={{ color: "rgba(255,255,255,0.88)" }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Entrar em contato
          </a>
        </div>

        <div className="mt-2 flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/eufrnz"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-surface rounded-full p-2.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:p-2.5"
            style={{ color: "rgba(255,255,255,0.78)" }}
            aria-label="GitHub"
          >
            <Github size={16} className="sm:size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/felipefornazeiro7"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-surface rounded-full p-2.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 sm:p-2.5"
            style={{ color: "rgba(255,255,255,0.78)" }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} className="sm:size-4" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        aria-label="Rolar para baixo"
        className="glass-surface absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-3 transition-all duration-200 hover:-translate-y-0.5 sm:bottom-10"
        style={{ color: "rgba(255,255,255,0.8)" }}
      >
        <ArrowDown size={18} className="sm:size-5" />
      </button>
    </section>
  );
}
