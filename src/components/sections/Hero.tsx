"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Backend Developer",
  "Java Student",
  "API Rest Builder",
  "Spring Boot Student",
];

export function Hero() {
  const role = useTypewriter(ROLES, 75, 2200);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dot-grid px-4 py-20 text-center sm:px-6"
    >
      {/* ── Ambient glow orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl sm:-top-32 sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full blur-3xl sm:h-80 sm:w-80"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
        {/* Profile Photo */}
        <div className="relative">
          <div
            className="absolute -inset-0.5 rounded-full opacity-75 blur-md sm:-inset-1 sm:blur-lg"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
          />
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10 sm:h-32 sm:w-32 md:h-40 md:w-40 md:ring-4">
            <Image
              src="/minhaFoto.jpg"
              alt="Felipe Fornazeiro"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Availability badge */}
        <div
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-medium sm:px-4 sm:text-xs"
          style={{
            background: "rgba(16,185,129,0.1)",
            border: "1px solid rgba(16,185,129,0.25)",
            color: "#34d399",
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Disponível para novos projetos
        </div>

        {/* Name */}
        <h1 className="px-4 text-3xl font-extrabold tracking-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Felipe <span className="gradient-text">Fornazeiro</span>
        </h1>

        {/* Typewriter role */}
        <p
          className="h-8 text-base font-semibold sm:h-10 sm:text-xl md:text-2xl"
          style={{ color: "#a78bfa" }}
        >
          {role}
          <span className="animate-pulse">|</span>
        </p>

        {/* Sub-heading */}
        <p
          className="max-w-xl px-4 text-sm leading-relaxed sm:text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Desenvolvedor Backend Java em formação — construindo APIs REST,
          sistemas de autenticação e integrando soluções com Spring Boot.
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="rounded-lg px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="rounded-lg px-5 py-2.5 text-xs font-semibold transition-all duration-200 hover:scale-105 sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.85)",
            }}
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Entrar em contato
          </a>
        </div>

        {/* Social links */}
        <div className="mt-2 flex items-center gap-3 sm:gap-4">
          <a
            href="https://github.com/frnzdev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2.5 transition-all duration-200 hover:scale-110 active:scale-95 sm:p-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="GitHub"
          >
            <Github size={16} className="sm:size-4.5" />
          </a>
          <a
            href="https://linkedin.com/in/felipefornazeiro7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2.5 transition-all duration-200 hover:scale-110 active:scale-95 sm:p-2"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} className="sm:size-4.5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        <ArrowDown size={18} className="sm:size-5" />
      </button>
    </section>
  );
}
