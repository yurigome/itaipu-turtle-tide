import { useState } from "react";
import { UtensilsCrossed, GlassWater } from "lucide-react";
import { cn } from "@/lib/utils";
import { media } from "./media";
import { Reveal } from "./Reveal";

type Item = { name: string; desc: string; price: string; img?: string };
const CATEGORIES: { id: string; label: string; items: Item[] }[] = [
  {
    id: "petiscos",
    label: "Petiscos e Porções",
    items: [
      { name: "Anéis de Cebola Crocantes", desc: "Empanados na hora, dourados e crocantes, com molho da casa.", price: "R$ 39,90", img: media.aneis },
      { name: "Iscas Empanadas", desc: "Iscas sequinhas para petiscar com os amigos de frente para o mar.", price: "Consulte o valor" },
      { name: "Batata Frita Especial", desc: "Porção generosa de batatas crocantes, perfeita para compartilhar.", price: "R$ 34,90" },
    ],
  },
  {
    id: "especialidades",
    label: "Especialidades",
    items: [
      { name: "Carne em Cubos com Aipim", desc: "Cubos de carne acebolada com aipim frito, farofinha e salada.", price: "R$ 79,90", img: media.carne },
      { name: "Porção Mista para Compartilhar", desc: "Uma seleção de petiscos da casa para a mesa toda.", price: "Consulte o valor" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas e Drinks",
    items: [
      { name: "Drinks Tropicais", desc: "Batidos cremosos com frutas, calda e aquele visual de verão.", price: "R$ 28,00", img: media.drink },
      { name: "Drinks com Frutas", desc: "Combinações refrescantes com frutas da estação.", price: "Consulte o valor" },
      { name: "Sucos Naturais", desc: "Feitos na hora para refrescar o dia de praia.", price: "R$ 14,00" },
    ],
  },
];

export function MenuSection() {
  const [active, setActive] = useState("petiscos");
  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <div>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2.5 text-sm transition-all",
              c.id === active
                ? "border-navy bg-navy text-foam"
                : "border-border bg-card text-navy hover:border-turquoise",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cat.items.map((it, i) => (
          <Reveal key={it.name} delay={i * 90}>
            <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden">
                {it.img ? (
                  <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-ocean text-seafoam">
                    {active === "bebidas" ? <GlassWater className="h-10 w-10" /> : <UtensilsCrossed className="h-10 w-10" />}
                    <span className="eyebrow">Foto em breve</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-2xl text-navy">{it.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                <div className="mt-2 flex items-center justify-between border-t border-dashed pt-4">
                  <span className="font-display text-xl text-navy">{it.price}</span>
                  <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">valor ilustrativo</span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
