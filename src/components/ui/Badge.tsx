interface BadgeProps {
  children: React.ReactNode;
  /** Optional hex/rgb accent color — used for subtle tinted background */
  color?: string;
  className?: string;
}

/**
 * Small pill badge used for tech stack tags on project cards.
 */
export function Badge({ children, color, className = "" }: BadgeProps) {
  const style = color
    ? {
        background: `${color}18`,
        border: `1px solid ${color}40`,
        color: `${color}`,
      }
    : {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.7)",
      };

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
