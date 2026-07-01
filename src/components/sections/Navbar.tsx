"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Tecnologias" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(5,6,10,0.72)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }
          : {}
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="glass-surface flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-2 text-base font-semibold tracking-tight text-white sm:gap-2 sm:px-4 sm:text-lg"
        >
          <span className="gradient-text">Felipe</span>
          <span>Fornazeiro</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="relative cursor-pointer text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#dbeafe" : "rgba(255,255,255,0.62)",
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-2 left-1/2 h-px w-3/4 -translate-x-1/2"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(96,165,250,0.95), rgba(255,255,255,0.2))",
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="glass-surface hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 md:block"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(96,165,250,0.16))",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleNav("#contact");
          }}
        >
          Falar comigo
        </a>

        {/* Mobile toggle */}
        <button
          className="glass-surface rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(5,6,10,0.94)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.84)" }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
