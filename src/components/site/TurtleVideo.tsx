import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { media } from "./media";

export function TurtleVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-[2rem] border border-seafoam/30 bg-navy-deep shadow-glow">
      <video
        ref={ref}
        src={media.tartaruga}
        poster={media.tartarugaCapa}
        preload="none"
        playsInline
        controls={started}
        className="h-full w-full object-cover"
        aria-label="Vídeo ilustrativo de uma tartaruga marinha nadando"
      />
      {!started && (
        <button
          onClick={() => {
            setStarted(true);
            ref.current?.play();
          }}
          className="group absolute inset-0 flex flex-col items-center justify-end gap-4 bg-hero-overlay p-8 text-foam"
          aria-label="Assistir ao vídeo"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-foam/15 ring-1 ring-foam/40 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-1 h-8 w-8 fill-current" />
          </span>
          <span className="eyebrow">Assistir · 0:46</span>
        </button>
      )}
    </div>
  );
}
