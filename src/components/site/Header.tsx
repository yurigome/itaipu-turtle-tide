import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { INSTAGRAM_URL } from "./media";

export const NAV = [
  { href: "#itaipu", label: "Itaipu" },
  { href: "#tartarugas", label: "Tartarugas" },
  { href: "#descubra", label: "Descubra" },
  { href: "#janara", label: "O Janara" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-navy-deep/90 py-3 backdrop-blur-md" : "py-6",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-foam md:px-10">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide">Janara</span>
          <span className="eyebrow text-seafoam">Quiosque 10</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-foam/80 transition-colors hover:text-seafoam">
              {n.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-foam/30 px-4 py-2 text-sm transition-colors hover:bg-foam hover:text-navy"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-4 lg:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-foam/10 py-3 font-display text-2xl text-foam"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
