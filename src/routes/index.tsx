import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Navigation, Waves, Mountain, Fish, Sun, Footprints, Shell, Eye, UtensilsCrossed, HeartHandshake } from "lucide-react";
import { Header, NAV } from "@/components/site/Header";
import { Reveal, Eyebrow, WaveDivider } from "@/components/site/Reveal";
import { TurtleVideo } from "@/components/site/TurtleVideo";
import { MenuSection } from "@/components/site/Menu";
import { media, INSTAGRAM_URL, DIRECTIONS_URL, MAP_EMBED_URL } from "@/components/site/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Janara Quiosque 10 — Praia de Itaipu, Niterói" },
      { name: "description", content: "Um paraíso à beira-mar na Praia de Itaipu, Niterói. Petiscos, drinks, natureza e tartarugas marinhas no Janara Quiosque 10." },
      { property: "og:title", content: "Janara Quiosque 10 — Praia de Itaipu" },
      { property: "og:description", content: "Boa gastronomia, natureza exuberante e momentos inesquecíveis na Praia de Itaipu, em Niterói." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnLight = "inline-flex items-center justify-center gap-2 rounded-full bg-foam px-7 py-4 text-sm font-semibold text-navy transition-all hover:bg-seafoam hover:-translate-y-0.5";
const btnGhost = "inline-flex items-center justify-center gap-2 rounded-full border border-foam/50 px-7 py-4 text-sm font-semibold text-foam backdrop-blur-sm transition-all hover:bg-foam/10 hover:-translate-y-0.5";
const btnDark = "inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-foam transition-all hover:bg-turquoise hover:text-navy-deep";

function Index() {
  return (
    <div id="topo" className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy-deep">
        <img src={media.praiaPanorama} alt="Vista panorâmica do mar em Niterói" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 text-foam md:px-10 md:pb-32">
          <p className="eyebrow animate-rise text-seafoam">Praia de Itaipu · Niterói · RJ</p>
          <h1 className="animate-rise mt-6 text-6xl leading-[0.9] md:text-8xl lg:text-[9rem]" style={{ animationDelay: "120ms" }}>
            Janara <br /><span className="italic text-seafoam">Quiosque 10</span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <div className="animate-rise" style={{ animationDelay: "260ms" }}>
              <p className="font-display text-3xl italic md:text-4xl">“Um paraíso à beira-mar espera por você.”</p>
              <p className="mt-4 max-w-lg text-foam/80">Boa gastronomia, natureza exuberante e momentos inesquecíveis na Praia de Itaipu, em Niterói.</p>
            </div>
            <div className="animate-rise flex flex-col gap-3 sm:flex-row md:justify-end" style={{ animationDelay: "400ms" }}>
              <a href="#janara" className={btnLight}>Conheça nosso espaço</a>
              <a href="#cardapio" className={btnGhost}>Explore nosso cardápio</a>
            </div>
          </div>
        </div>
        <WaveDivider className="absolute inset-x-0 -bottom-px text-foam" />
      </section>

      {/* ITAIPU */}
      <section id="itaipu" className="relative py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:pt-16">
            <Eyebrow>A protagonista</Eyebrow>
            <h2 className="mt-6 text-5xl leading-[1] text-navy md:text-7xl">Um cenário especial, <em className="text-turquoise">todos os dias.</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Localizada na Região Oceânica de Niterói, a Praia de Itaipu encanta por suas águas, paisagens naturais e atmosfera acolhedora. Um lugar onde a beleza do litoral se encontra com a tranquilidade de aproveitar bons momentos perto do mar.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t pt-8">
              {[{ i: Waves, t: "Mar" }, { i: Mountain, t: "Montanhas" }, { i: Sun, t: "Areia" }].map(({ i: I, t }) => (
                <div key={t} className="flex flex-col gap-2 text-navy"><I className="h-6 w-6 text-turquoise" /><span className="text-sm">{t}</span></div>
              ))}
            </div>
          </Reveal>
          <div className="relative lg:col-span-7">
            <Reveal>
              <img src={media.praiaMorro} alt="Faixa de areia, mar turquesa e morro coberto de mata" loading="lazy" className="aspect-square w-full rounded-[2.5rem] object-cover shadow-soft" />
            </Reveal>
            <Reveal delay={200} className="absolute -bottom-10 -left-4 w-1/2 md:-left-12">
              <img src={media.praiaPanorama} alt="O mar e as montanhas no horizonte" loading="lazy" className="aspect-[4/3] w-full rounded-3xl border-8 border-foam object-cover shadow-soft" />
            </Reveal>
            <span className="absolute -right-2 top-8 rotate-90 eyebrow text-muted-foreground md:-right-10">Região Oceânica · Niterói</span>
          </div>
        </div>
      </section>

      {/* TARTARUGAS */}
      <section id="tartarugas" className="relative overflow-hidden bg-ocean py-24 text-foam md:py-36">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-turquoise/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow light>Vida marinha</Eyebrow>
            <h2 className="mt-6 text-5xl leading-[1] md:text-7xl">A natureza também faz parte <em className="text-seafoam">do espetáculo.</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-foam/80">
              A Praia de Itaipu é um lugar onde a beleza do mar vai além da paisagem. A região recebe visitas frequentes de tartarugas marinhas, que podem ser observadas em seu ambiente natural. Um encontro especial com a vida marinha que torna a experiência ainda mais encantadora.
            </p>
          </Reveal>
          <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
            <Reveal><TurtleVideo /></Reveal>
            <Reveal delay={150}>
              <h3 className="text-4xl leading-tight md:text-5xl">Um encontro especial com a vida marinha.</h3>
              <p className="mt-6 text-lg leading-relaxed text-foam/80">
                Além das paisagens encantadoras, Itaipu também proporciona momentos especiais de contato com a natureza. A presença frequente de tartarugas marinhas é mais um motivo para admirar e preservar esse ambiente.
              </p>
              <p className="mt-4 text-xs text-foam/50">Vídeo ilustrativo da vida marinha.</p>
              <div className="mt-10 flex gap-4 rounded-3xl border border-seafoam/30 bg-foam/5 p-6 backdrop-blur-sm">
                <Eye className="mt-1 h-6 w-6 shrink-0 text-seafoam" />
                <p className="font-display text-xl italic">Observe, admire e preserve. Nunca toque, alimente ou perturbe os animais marinhos.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESCUBRA */}
      <section id="descubra" className="bg-sand-fade py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><Eyebrow>Conheça Itaipu</Eyebrow><h2 className="mt-6 max-w-2xl text-5xl leading-[1] text-navy md:text-7xl">Muito mais para descobrir em Itaipu.</h2></div>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-6">
            {[
              { img: media.praiaPanorama, t: "Região Oceânica", d: "Itaipu fica na Região Oceânica de Niterói, com vista aberta para o mar e o horizonte.", c: "md:col-span-4 md:row-span-2", a: "aspect-[4/3] md:aspect-auto md:h-full" },
              { img: media.praiaMorro, t: "Mar, areia e montanhas", d: "Uma paisagem emoldurada por morros cobertos de mata.", c: "md:col-span-2", a: "aspect-[4/3]" },
              { img: media.tartarugaCapa, t: "Vida marinha", d: "Tartarugas marinhas visitam a região com frequência.", c: "md:col-span-2", a: "aspect-[4/3]" },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100} className={x.c}>
                <article className={`group relative overflow-hidden rounded-3xl ${x.a}`}>
                  <img src={x.img} alt={x.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-hero-overlay" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-foam md:p-8">
                    <h3 className="text-3xl">{x.t}</h3><p className="mt-2 max-w-md text-sm text-foam/80">{x.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal className="md:col-span-3">
              <article className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-navy p-8 text-foam">
                <Fish className="h-8 w-8 text-seafoam" />
                <div><h3 className="text-3xl">Pesca artesanal</h3><p className="mt-2 text-sm text-foam/75">A tradição dos pescadores artesanais faz parte da identidade e da atmosfera da praia.</p></div>
              </article>
            </Reveal>
            <Reveal delay={100} className="md:col-span-3">
              <article className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-seafoam p-8 text-navy-deep">
                <Shell className="h-8 w-8" />
                <div><h3 className="text-3xl">Natureza e lazer</h3><p className="mt-2 text-sm text-navy/80">Banho de mar, caminhadas pela areia e um dia inteiro ao ar livre.</p></div>
              </article>
            </Reveal>
          </div>

          {/* O que fazer */}
          <div className="mt-28">
            <Reveal><h3 className="text-center text-4xl text-navy md:text-6xl">O que fazer em um dia <em className="text-turquoise">na Praia de Itaipu?</em></h3></Reveal>
            <ol className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-5">
              {[
                { i: Waves, t: "Aproveitar um banho de mar." },
                { i: Footprints, t: "Caminhar pela faixa de areia." },
                { i: Mountain, t: "Conhecer a região e sua atmosfera tradicional." },
                { i: Eye, t: "Observar a natureza e a vida marinha com responsabilidade." },
                { i: UtensilsCrossed, t: "Aproveitar os petiscos e bebidas do Janara Quiosque 10." },
              ].map(({ i: I, t }, n) => (
                <li key={t} className={`flex flex-col gap-6 p-8 ${n === 4 ? "bg-navy text-foam" : "bg-card text-navy"}`}>
                  <span className="font-display text-5xl italic text-turquoise">0{n + 1}</span>
                  <I className="h-6 w-6" />
                  <p className="leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* JANARA */}
      <section id="janara" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-10 lg:grid-cols-2">
          <div className="relative grid grid-cols-2 gap-4">
            <Reveal className="pt-16"><img src={media.drink} alt="Drink rosa com guarda-chuva na praia" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-soft" /></Reveal>
            <Reveal delay={150}><img src={media.carne} alt="Carne em cubos com aipim" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-soft" /></Reveal>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-turquoise px-6 py-3 text-navy-deep shadow-glow">
              <HeartHandshake className="h-5 w-5" /><span className="text-sm font-semibold">Pé na areia</span>
            </div>
          </div>
          <Reveal>
            <Eyebrow>Janara Quiosque 10</Eyebrow>
            <h2 className="mt-6 text-5xl leading-[1] text-navy md:text-7xl">Seu ponto de encontro <em className="text-turquoise">à beira-mar.</em></h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Em meio à beleza da Praia de Itaipu, o Janara Quiosque 10 é um convite para aproveitar o melhor de um dia na praia. Reúna os amigos, desfrute de bons petiscos, bebidas refrescantes e aproveite cada momento com o visual especial do litoral de Niterói.
            </p>
            <a href="#cardapio" className={`${btnDark} mt-10`}>Ver o cardápio</a>
          </Reveal>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="bg-sand py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><Eyebrow>Sabores da praia</Eyebrow><h2 className="mt-6 text-5xl text-navy md:text-7xl">Cardápio</h2></div>
            <p className="max-w-sm text-sm text-muted-foreground">Cardápio demonstrativo: itens, descrições e valores são ilustrativos e serão atualizados com as informações oficiais do quiosque.</p>
          </Reveal>
          <MenuSection />
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="text-center"><Eyebrow>Galeria</Eyebrow><h2 className="mt-6 text-5xl text-navy md:text-7xl">Dias de <em className="text-turquoise">Itaipu</em></h2></Reveal>
          <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
            {[
              { s: media.praiaMorro, a: "Praia de Itaipu", c: "col-span-2 row-span-2" },
              { s: media.drink, a: "Drink tropical", c: "row-span-2" },
              { s: media.aneis, a: "Anéis de cebola", c: "" },
              { s: media.tartarugaCapa, a: "Vida marinha", c: "" },
              { s: media.praiaPanorama, a: "O mar de Niterói", c: "col-span-2" },
              { s: media.carne, a: "Carne com aipim", c: "col-span-2 md:col-span-1 row-span-1" },
              { s: media.aneis, a: "Petiscos na areia", c: "hidden md:block" },
            ].map((g, i) => (
              <Reveal key={i} delay={(i % 4) * 80} className={g.c}>
                <figure className="group relative h-full overflow-hidden rounded-2xl">
                  <img src={g.s} alt={g.a} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-foam/90 px-3 py-1 text-xs text-navy opacity-0 transition-opacity group-hover:opacity-100">{g.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-ocean py-24 text-foam md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Eyebrow light>Localização</Eyebrow>
            <h2 className="mt-6 text-5xl leading-[1] md:text-6xl">O seu próximo destino <em className="text-seafoam">é aqui.</em></h2>
            <div className="mt-10 flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-seafoam" />
              <div><p className="font-display text-2xl">Janara Quiosque 10</p><p className="text-foam/75">Praia de Itaipu — Niterói, Rio de Janeiro.</p></div>
            </div>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={`${btnLight} mt-10`}><Navigation className="h-4 w-4" /> Como chegar</a>
            <img src={media.praiaMorro} alt="Praia de Itaipu" loading="lazy" className="mt-10 hidden aspect-[16/9] w-full rounded-3xl object-cover lg:block" />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <iframe title="Mapa da Praia de Itaipu" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full rounded-3xl border-0 lg:h-full lg:min-h-[560px]" />
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal className="flex flex-col items-center text-center">
            <Instagram className="h-10 w-10 text-turquoise" />
            <h2 className="mt-6 text-5xl text-navy md:text-6xl">@quiosquejanara10</h2>
            <p className="mt-4 max-w-md text-muted-foreground">Fotos, novidades e o dia a dia do quiosque na Praia de Itaipu.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-4">
            {[media.drink, media.praiaMorro, media.aneis, media.praiaPanorama, media.carne].map((s, i) => (
              <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={`group relative aspect-square overflow-hidden rounded-2xl ${i > 2 ? "hidden md:block" : ""}`}>
                <img src={s} alt="Publicação do Instagram do Janara" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 transition-opacity group-hover:opacity-100"><Instagram className="h-8 w-8 text-foam" /></span>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={btnDark}><Instagram className="h-4 w-4" /> Acompanhe nossas novidades</a></div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[80svh] items-center overflow-hidden">
        <img src={media.praiaPanorama} alt="Panorama do mar em Niterói" loading="lazy" className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <Reveal className="relative mx-auto max-w-4xl px-5 text-center text-foam">
          <h2 className="text-6xl leading-[0.95] md:text-8xl">Itaipu espera <em className="text-seafoam">por você!</em></h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-foam/85">Um dia de praia, uma boa companhia e sabores especiais. Tudo isso em um dos cenários mais bonitos de Niterói.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className={btnLight}><Instagram className="h-4 w-4" /> Conheça nosso Instagram</a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className={btnGhost}><Navigation className="h-4 w-4" /> Como chegar</a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-16 text-foam">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-10">
          <div>
            <p className="font-display text-4xl">Janara <span className="italic text-seafoam">Quiosque 10</span></p>
            <p className="mt-3 text-sm text-foam/60">Praia de Itaipu — Niterói/RJ</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm text-foam/70">
            {NAV.map((n) => <a key={n.href} href={n.href} className="hover:text-seafoam">{n.label}</a>)}
          </nav>
          <div className="md:text-right">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-seafoam hover:underline"><Instagram className="h-4 w-4" /> @quiosquejanara10</a>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-7xl border-t border-foam/10 px-5 pt-6 text-xs text-foam/50 md:px-10">© {new Date().getFullYear()} Janara Quiosque 10. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
