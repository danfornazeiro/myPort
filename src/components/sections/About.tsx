"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Code2, Server, Layers, Lightbulb } from "lucide-react";

const STATS = [
  { value: "2023", label: "Início da jornada" },
  { value: "2", label: "Projetos entregues" },
  { value: "8+", label: "Tecnologias estudadas" },
  { value: "100%", label: "Comprometimento" },
];

const HIGHLIGHTS = [
  {
    icon: <Server size={20} />,
    title: "Backend focado",
    desc: "Especialista em criar APIs RESTful, microsserviços e sistemas distribuídos robustos.",
  },
  {
    icon: <Layers size={20} />,
    title: "Arquitetura limpa",
    desc: "Apaixonado por clean code, SOLID e design patterns que tornam o software sustentável.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Java & Ecossistema",
    desc: "Profundo domínio de Java, Spring Boot, JPA/Hibernate e ferramentas do ecossistema JVM.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Sempre aprendendo",
    desc: "Curioso por natureza — acompanho de perto cloud, observabilidade e novas arquiteturas.",
  },
];

export function About() {
  const leftRef = useScrollAnimation<HTMLDivElement>(0.15);
  const rightRef = useScrollAnimation<HTMLDivElement>(0.15);

  return (
    <section id="about" className="relative py-28 px-6">
      {/* subtle ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(124,58,237,0.07)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="// sobre mim"
          title="Quem "
          highlight="sou eu"
          description="Desenvolvedor backend apaixonado por resolver problemas complexos com soluções elegantes."
        />

        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ── Left — Text ── */}
          <div ref={leftRef} className="fade-in-left space-y-5">
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Olá! Sou <strong className="text-white">Felipe Fornazeiro</strong>
              , técnico em Desenvolvimento de Sistemas pela{" "}
              <span className="text-purple-400">ETEC de Heliópolis</span> e
              futuro tecnólogo em Análise e Desenvolvimento de Sistemas pela
              FATEC Ipiranga. Atuo como desenvolvedor backend com foco em Java e
              Spring Boot.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Meu objetivo é contribuir no desenvolvimento de sistemas e APIs
              aplicando{" "}
              <span className="text-purple-400">
                boas práticas de programação
              </span>
              , evoluindo tecnicamente junto à equipe e aos projetos. Tenho
              experiência com APIs REST, autenticação JWT, Spring Security e
              integração com bancos relacionais.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Inglês avançado (leitura, escrita e fala) e Espanhol básico.
              Sempre em busca de aprender e crescer na área de tecnologia.
            </p>

            <a
              href="/FelipeCurriculo.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              }}
            >
              Baixar currículo
            </a>
          </div>

          {/* ── Right — Cards ── */}
          <div ref={rightRef} className="fade-in-right grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass glass-hover gradient-border rounded-xl p-5 transition-all duration-300"
              >
                <span
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    color: "#a78bfa",
                  }}
                >
                  {icon}
                </span>
                <h3 className="mb-1 text-sm font-semibold text-white">
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-xl p-6 text-center transition-all duration-300 hover:scale-105"
              style={{ border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <span className="gradient-text block text-3xl font-extrabold">
                {value}
              </span>
              <span
                className="mt-1 block text-xs"
                style={{ color: "var(--muted)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Formation ── */}
        <div className="mt-12">
          <h3
            className="mb-5 text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            // formação
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                institution: "ETEC de Heliópolis",
                course: "Técnico em Desenvolvimento de Sistemas",
                period: "2023 – 2026",
                icon: "🎓",
                color: "#7c3aed",
              },
              {
                institution: "FATEC Ipiranga",
                course: "Análise e Desenvolvimento de Sistemas",
                period: "2026 – 2027",
                icon: "🏫",
                color: "#06b6d4",
              },
              {
                institution: "DIO & Curso em Vídeo",
                course: "Java, Spring Boot, React, HTML/CSS/JS",
                period: "2024 – 2026",
                icon: "💻",
                color: "#f59e0b",
              },
              {
                institution: "Intellecti Idiomas",
                course: "Inglês avançado",
                period: "2022 – 2027",
                icon: "🇺🇸",
                color: "#23B035",
              },
            ].map(({ institution, course, period, icon, color }) => (
              <div
                key={institution}
                className="glass gradient-border rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg"
                    style={{
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                    }}
                  >
                    {icon}
                  </span>
                  <span className="text-xs font-medium" style={{ color }}>
                    {period}
                  </span>
                </div>
                <p className="mb-0.5 text-sm font-semibold text-white">
                  {institution}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
