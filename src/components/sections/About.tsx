"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Sparkles size={20} />,
    title: "Resumo profissional",
    desc: "Estudante de Análise e Desenvolvimento de Sistemas e Técnico em Desenvolvimento de Sistemas. Experiência prática no desenvolvimento de aplicações Full Stack e APIs REST utilizando JavaScript, TypeScript, React, Next.js, Java, Spring Boot e SQL.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Competências",
    desc: "Análise e levantamento de requisitos, modelagem de sistemas, documentação técnica, modelagem de banco de dados, raciocínio lógico estruturado e perfil colaborativo focado em resolução de problemas.",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Experiência prática",
    desc: "Projetos com Java, Spring Boot, Angular, TypeScript, Laravel, PHP, JavaScript, SQL, Next.js, React, Node.js e integração com APIs e bancos relacionais.",
  },
  {
    icon: <Languages size={20} />,
    title: "Idiomas",
    desc: "Inglês intermediário e Espanhol básico.",
  },
];

const EDUCATION = [
  {
    institution: "ETEC de Heliópolis",
    course: "Técnico em Desenvolvimento de Sistemas",
    period: "2023 – 2025",
  },
  {
    institution: "FATEC Ipiranga",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2026 – 2027",
  },
];

const EXPERIENCE = [
  {
    title: "API de Autenticação com JWT",
    meta: "Aprendizado | 2026",
    description:
      "API REST desenvolvida com Java e Spring Boot, implementando autenticação via JWT e Spring Security, controle de acesso, persistência com JPA/Hibernate e integração com banco de dados PostgreSQL.",
  },
  {
    title: "VanRoute",
    meta: "Projeto Faculdade | Fatec Ipiranga 2026 | Em desenvolvimento",
    description:
      "Plataforma Full Stack para gestão de transporte escolar, com monitoramento em tempo real, otimização de rotas, autenticação de usuários, dashboard administrativo, controle financeiro, notificações automáticas e comunicação entre pais, motoristas e empresas.",
  },
  {
    title: "Labor",
    meta: "TCC | ETEC 2025 | Concluído",
    description:
      "Plataforma web desenvolvida em equipe para conectar profissionais freelancers a oportunidades em eventos, como monitores de brinquedos, copeiros, garçons e manobristas. Atuei no desenvolvimento utilizando Laravel, PHP, JavaScript e SQL, além de participar da modelagem do sistema, documentação técnica e organização do projeto.",
  },
  {
    title: "E-commerce de Bewear",
    meta: "2025",
    description:
      "Plataforma de comércio eletrônico desenvolvida com Next.js, React, TypeScript e Node.js, contendo catálogo de produtos, carrinho de compras, gerenciamento de pedidos e integração de pagamentos via Stripe em ambiente de testes.",
  },
];

const COURSES = [
  {
    title: "YOUTUBE - Curso em Vídeo",
    meta: "2024–2025",
    description: "HTML, CSS e JavaScript.",
  },
  {
    title: "DIO - React",
    meta: "2025",
    description: "React Hooks, Componentes, Estados, Rotas e Props.",
  },
  {
    title: "DIO - Java",
    meta: "2026",
    description: "POO, Estrutura de Dados, Spring Boot, Spring Security, APIs REST.",
  },
  {
    title: "Udemy",
    meta: "2026",
    description: "Spring Boot 2026 REST API's do 0 à AWS e GCP c Java e Docker.",
  },
];

export function About() {
  const leftRef = useScrollAnimation<HTMLDivElement>(0.15);
  const rightRef = useScrollAnimation<HTMLDivElement>(0.15);

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:py-24 sm:px-6 md:py-32"
    >
      {/* subtle ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full blur-3xl sm:h-64 sm:w-64"
        style={{ background: "rgba(96,165,250,0.07)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="// sobre mim"
          title="Quem "
          highlight="sou eu"
          description="Resumo, formação, experiência, cursos complementares e competências refletidos exatamente a partir do currículo anexado."
        />

        <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* ── Left — Text ── */}
          <div ref={leftRef} className="fade-in-left space-y-4 sm:space-y-5">
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(255,255,255,0.66)" }}
            >
              Olá! Sou <strong className="text-white">Felipe Fornazeiro</strong>,
              estudante de Análise e Desenvolvimento de Sistemas e Técnico em
              Desenvolvimento de Sistemas. Tenho experiência prática no
              desenvolvimento de aplicações Full Stack e APIs REST utilizando
              JavaScript, TypeScript, React, Next.js, Java, Spring Boot e bancos
              de dados SQL.
            </p>
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(255,255,255,0.66)" }}
            >
              Busco oportunidades como Jovem Aprendiz, Estagiário ou
              Desenvolvedor Júnior. Raciocínio lógico estruturado, facilidade
              para aprender novas stacks rapidamente e perfil colaborativo
              focado em resolução de problemas são pontos centrais do meu perfil.
            </p>
            <p
              className="text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(255,255,255,0.66)" }}
            >
              Também atuo com análise e levantamento de requisitos, modelagem de
              sistemas, documentação técnica e modelagem de banco de dados.
            </p>

            <a
              href="/CurriculoFelipe.pdf"
              target="_blank"
              className="glass-surface inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 sm:text-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(96,165,250,0.18))",
              }}
            >
              Baixar currículo
            </a>
          </div>

          {/* ── Right — Cards ── */}
          <div
            ref={rightRef}
            className="fade-in-right grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {HIGHLIGHTS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-surface gradient-border rounded-[1.4rem] p-4 transition-all duration-300 sm:p-5"
              >
                <span
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl sm:mb-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.88)",
                  }}
                >
                  {icon}
                </span>
                <h3 className="mb-1 text-sm font-semibold text-white sm:text-[0.98rem]">
                  {title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.56)" }}>
              Formação
            </h3>
            <div className="space-y-3">
              {EDUCATION.map(({ institution, course, period }) => (
                <div key={institution} className="glass-surface rounded-[1.3rem] p-4 sm:p-5">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white/90">
                      <GraduationCap size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{institution}</p>
                      <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.55)" }}>{period}</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.66)" }}>{course}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.56)" }}>
              Experiência prática
            </h3>
            <div className="space-y-3">
              {EXPERIENCE.map(({ title, meta, description }) => (
                <div key={title} className="glass-surface rounded-[1.3rem] p-4 sm:p-5">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.55)" }}>{meta}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/70">CV</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.56)" }}>
              Cursos complementares
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {COURSES.map(({ title, meta, description }) => (
                <div key={title} className="glass-surface rounded-[1.25rem] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 text-white/90">
                      <BookOpen size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.55)" }}>{meta}</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.66)" }}>{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.56)" }}>
              Idiomas e perfil
            </h3>
            <div className="glass-surface rounded-[1.25rem] p-4 sm:p-5">
              <div className="flex flex-wrap gap-2">
                {[
                  "Inglês intermediário",
                  "Espanhol básico",
                  "Raciocínio lógico estruturado",
                  "Perfil colaborativo",
                  "Aprendizado rápido",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
