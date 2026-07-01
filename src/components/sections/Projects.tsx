"use client";

import { useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useScrollAnimation<HTMLDivElement>(0.1);

  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:py-24 sm:px-6 md:py-32"
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full blur-3xl sm:h-72 sm:w-72"
        style={{ background: "rgba(96,165,250,0.08)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          label="// projetos"
          title="Projetos "
          highlight="Selecionados"
          description="Projetos e entregas acadêmicas alinhadas ao que está descrito no currículo."
        />

        <div
          ref={gridRef}
          className="fade-in-up grid gap-4 sm:grid-cols-2 sm:gap-6"
        >
          {displayed.map((project) => (
            <article
              key={project.id}
              className="gradient-border group relative flex flex-col overflow-hidden rounded-[1.35rem] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent line */}
              <div
                className="h-0.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
                }}
              />

              {/* Featured badge */}
              {project.featured && (
                <div
                  className="absolute right-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium text-amber-300 sm:right-3 sm:top-3 sm:text-xs"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                >
                  <Star size={9} fill="currentColor" className="sm:size-2.5" />
                  Destaque
                </div>
              )}

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                {/* Icon + title */}
                <div className="mb-2 flex items-center gap-2.5 sm:mb-3 sm:gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-2xl text-lg sm:h-11 sm:w-11 sm:text-xl"
                    style={{
                      background: `${project.accentColor}18`,
                      border: `1px solid ${project.accentColor}30`,
                    }}
                  >
                    {project.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="mb-3 flex-1 text-xs leading-relaxed sm:mb-4 sm:text-sm"
                  style={{ color: "rgba(255,255,255,0.64)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} color={project.accentColor}>
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-200 hover:text-white sm:text-xs"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    <Github size={13} className="sm:size-3.5" />
                    Ver código
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-200 hover:text-white sm:text-xs"
                      style={{ color: "rgba(255,255,255,0.72)" }}
                    >
                      <ExternalLink size={13} className="sm:size-3.5" />
                      Demo ao vivo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > 4 && (
          <div className="mt-8 text-center sm:mt-10">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="glass-surface rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {showAll
                ? "Mostrar menos"
                : `Ver todos os ${projects.length} projetos`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
