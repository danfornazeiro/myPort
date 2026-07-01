"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";
import { BookOpenCheck, Code2, LayoutList, Wrench } from "lucide-react";

const COMPETENCIES = [
  {
    icon: <LayoutList size={18} />,
    title: "Análise e levantamento de requisitos",
    description: "Estruturação de necessidades, objetivos e escopo de soluções.",
  },
  {
    icon: <Code2 size={18} />,
    title: "Modelagem de sistemas",
    description: "Definição de fluxos, integrações e organização lógica da aplicação.",
  },
  {
    icon: <BookOpenCheck size={18} />,
    title: "Documentação técnica",
    description: "Registro claro de regras, rotas, processos e decisões do projeto.",
  },
  {
    icon: <Wrench size={18} />,
    title: "Modelagem de banco de dados",
    description: "Estruturação de dados em SQL, relacional e persistência organizada.",
  },
];

export function Skills() {
  const wrapRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:py-24 sm:px-6 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.05) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="// tecnologias e competências"
          title="Minha "
          highlight="stack"
          description="Ferramentas, linguagens e competências diretamente alinhadas ao currículo."
        />

        <div ref={wrapRef} className="fade-in-up space-y-8 sm:space-y-10">
          {skillCategories.map(
            ({ title, skills, isSubcategory, subcategoryLabel }) => (
              <div
                key={title}
                className={
                  isSubcategory
                    ? "ml-3 border-l-2 pl-4 -mt-5 sm:ml-4 sm:pl-5 sm:-mt-6"
                    : ""
                }
                style={
                  isSubcategory ? { borderColor: "rgba(124,58,237,0.3)" } : {}
                }
              >
                <h3
                  className="mb-3 text-xs font-medium uppercase tracking-widest sm:mb-4"
                  style={{ color: isSubcategory ? "#dbeafe" : "rgba(255,255,255,0.55)" }}
                >
                  {isSubcategory ? `↳ ${subcategoryLabel}` : title}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                  {skills.map(({ name, logo, color }) => (
                    <div
                      key={name}
                      className="glass-surface gradient-border group flex flex-col items-center gap-2 rounded-[1.25rem] p-3 text-center transition-all duration-300 hover:-translate-y-1 sm:gap-2.5 sm:p-4"
                    >
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-2xl sm:h-10 sm:w-10"
                        style={{
                          background: `${color}18`,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={logo}
                          alt={name}
                          width={24}
                          height={24}
                          className="h-6 w-6 object-contain drop-shadow-sm sm:h-7 sm:w-7"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                      <span
                        className="text-[10px] font-medium leading-tight sm:text-xs"
                        style={{ color: "rgba(255,255,255,0.78)" }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-10 sm:mt-12">
          <h3
            className="mb-4 text-xs font-medium uppercase tracking-[0.28em] sm:mb-5"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Competências
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {COMPETENCIES.map(({ icon, title, description }) => (
              <div key={title} className="glass-surface gradient-border rounded-[1.35rem] p-4 sm:p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white/90">
                    {icon}
                  </span>
                  <h4 className="text-sm font-semibold text-white">{title}</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.64)" }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
