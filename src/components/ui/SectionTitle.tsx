"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTitleProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
}

/**
 * Reusable animated section header.
 *
 *  <SectionTitle
 *    label="// sobre mim"
 *    title="Quem sou"
 *    highlight="eu"
 *    description="Um breve texto..."
 *  />
 */
export function SectionTitle({
  label,
  title,
  highlight,
  description,
}: SectionTitleProps) {
  const ref = useScrollAnimation<HTMLDivElement>(0.2);

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div ref={ref} className="fade-in-up mb-10 text-center sm:mb-12 md:mb-14">
      <span
        className="glass-surface mb-2 inline-flex rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.28em] uppercase sm:mb-3 sm:px-4 sm:text-xs"
        style={{ color: "rgba(255,255,255,0.72)" }}
      >
        {label}
      </span>

      <h2 className="mt-2 px-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>

      {description && (
        <p
          className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-relaxed sm:mt-4 sm:text-base"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
