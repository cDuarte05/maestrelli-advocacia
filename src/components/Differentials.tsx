import { Reveal } from "@/components/Reveal";

const blocks = [
  { title: "Atendimento individualizado", text: "Cada cliente é tratado de forma única." },
  { title: "Linguagem clara", text: "Explicações jurídicas sem excesso de termos técnicos." },
  { title: "Visão estratégica", text: "Análise cuidadosa das possibilidades e riscos." },
  { title: "Proximidade e confiança", text: "Comunicação transparente durante o atendimento." },
];

export function Differentials() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="bg-beige/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Diferenciais</p>
          <h2
            id="diferenciais-titulo"
            className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[2.9rem]"
          >
            Por que escolher uma advocacia personalizada?
          </h2>
        </Reveal>

        <ul className="grid gap-8 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <Reveal
              as="li"
              key={block.title}
              delay={i * 90}
              className="rounded-sm border border-border bg-background/70 p-8 transition-shadow duration-500 hover:shadow-soft"
            >
              <span className="block h-px w-8 bg-champagne" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-[1.4rem]">{block.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
