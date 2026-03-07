"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

/**
 * Returns the id of the section currently most visible in the viewport.
 * Used by Navbar to highlight the active link.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect =
      (id: string) =>
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      };

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(handleIntersect(id), {
        threshold: 0.4,
      });
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}
