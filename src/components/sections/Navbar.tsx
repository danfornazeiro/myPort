"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Skills" },
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
              background: "rgba(10,10,10,0.85)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }
          : {}
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            }}
          >
            FF
          </span>
          <span>
            frnz<span className="gradient-text">dev</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{
                    color: isActive ? "#a78bfa" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{
                        background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
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
          className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-200 md:block"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
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
          className="text-white md:hidden"
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
            background: "rgba(10,10,10,0.96)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNav(href)}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.8)" }}
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
