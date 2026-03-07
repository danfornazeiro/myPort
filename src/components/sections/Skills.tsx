"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const wrapRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section
      id="skills"
      className="relative py-16 px-4 sm:py-20 sm:px-6 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.04) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="// tecnologias"
          title="Minha "
          highlight="stack"
          description="Ferramentas e tecnologias que uso no dia a dia para construir soluções sólidas."
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
                  style={{ color: isSubcategory ? "#a78bfa" : "var(--muted)" }}
                >
                  {isSubcategory ? `↳ ${subcategoryLabel}` : title}
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                  {skills.map(({ name, logo, color }) => (
                    <div
                      key={name}
                      className="gradient-border group flex flex-col items-center gap-2 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 sm:gap-2.5 sm:p-4"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10"
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
                        style={{ color: "rgba(255,255,255,0.75)" }}
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
      </div>
    </section>
  );
}
