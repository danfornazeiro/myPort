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
    <div ref={ref} className="fade-in-up mb-14 text-center">
      <span
        className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium tracking-widest uppercase"
        style={{
          background: "rgba(124,58,237,0.12)",
          border: "1px solid rgba(124,58,237,0.3)",
          color: "#a78bfa",
        }}
      >
        {label}
      </span>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>

      {description && (
        <p
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
