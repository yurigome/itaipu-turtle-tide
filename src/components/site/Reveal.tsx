import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", light ? "text-seafoam" : "text-turquoise")}>
      <span className="h-px w-10 bg-current" />
      {children}
    </p>
  );
}

export function WaveDivider({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none overflow-hidden leading-none", className)} aria-hidden>
      <svg className="animate-wave h-12 w-[200%]" viewBox="0 0 2400 60" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 T1500 30 T1800 30 T2100 30 T2400 30 V60 H0Z"
        />
      </svg>
    </div>
  );
}
