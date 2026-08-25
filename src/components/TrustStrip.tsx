import { UserRound, Compass, Video, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    text: "Cada caso analisado individualmente",
  },
  {
    icon: Compass,
    title: "Estratégia jurídica",
    text: "Orientação baseada no contexto de cada cliente",
  },
  { icon: Video, title: "Atendimento online", text: "Consultas de forma prática e segura" },
  { icon: Lock, title: "Sigilo profissional", text: "Privacidade e confidencialidade" },
];

export function TrustStrip() {
  return (
    <section aria-label="Diferenciais de confiança" className="border-y border-border bg-beige/60">
      <ul className="mx-auto grid max-w-[1240px] gap-px px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {items.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            as="li"
            key={title}
            delay={i * 80}
            className="flex gap-4 border-b border-border/70 py-8 last:border-b-0 sm:py-10 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:pl-8"
          >
            <Icon className="mt-0.5 size-5 shrink-0 text-champagne" strokeWidth={1.4} />
            <div>
              <h3 className="font-sans text-[0.9rem] font-medium tracking-wide">{title}</h3>
              <p className="mt-1.5 text-[0.83rem] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
