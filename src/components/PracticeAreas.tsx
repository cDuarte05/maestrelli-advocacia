import { ArrowUpRight, HeartHandshake, Baby, Scroll, Landmark } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const areas = [
  {
    icon: HeartHandshake,
    title: "Divórcio e Dissolução de União Estável",
    text: "Orientação jurídica para processos consensuais ou litigiosos.",
  },
  {
    icon: Baby,
    title: "Guarda e Pensão Alimentícia",
    text: "Atuação em questões de guarda, convivência e alimentos.",
  },
  {
    icon: Scroll,
    title: "Inventário e Sucessões",
    text: "Assessoria em inventários, partilhas e planejamento sucessório.",
  },
  {
    icon: Landmark,
    title: "Planejamento Familiar e Patrimonial",
    text: "Orientação preventiva para organização familiar e patrimonial.",
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]">
              Uma abordagem estratégica para momentos decisivos.
            </h2>
          </div>
          <p className="max-w-md self-end text-[1rem] leading-relaxed text-muted-foreground">
            A orientação jurídica é construída a partir do contexto de cada cliente: entender a
            situação, esclarecer as possibilidades e definir os caminhos possíveis com segurança e
            responsabilidade.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px border-t border-border sm:grid-cols-2">
          {areas.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="group border-b border-border sm:[&:nth-child(odd)]:border-r"
            >
              <a
                href="#contato"
                className="flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-card focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring lg:p-10"
              >
                <div>
                  <Icon
                    className="size-6 text-champagne transition-transform duration-500 group-hover:-translate-y-0.5"
                    strokeWidth={1.3}
                  />
                  <h3 className="mt-8 max-w-xs font-serif text-[1.55rem] leading-tight">{title}</h3>
                  <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.14em] uppercase">
                  Saiba mais
                  <ArrowUpRight className="size-4 text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
