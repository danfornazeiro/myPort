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
        className="mb-2 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase sm:mb-3 sm:px-3 sm:text-xs"
        style={{
          background: "rgba(124,58,237,0.12)",
          border: "1px solid rgba(124,58,237,0.3)",
          color: "#a78bfa",
        }}
      >
        {label}
      </span>

      <h2 className="mt-2 px-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>

      {description && (
        <p
          className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-relaxed sm:mt-4 sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
