import { Ear, MessagesSquare, Target } from "lucide-react";
import aboutImage from "@/assets/about-marcela.jpg";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const highlights = [
  { icon: Ear, label: "Escuta atenta" },
  { icon: MessagesSquare, label: "Comunicação clara" },
  { icon: Target, label: "Estratégia personalizada" },
];

export function About() {
  return (
    <section id="sobre" className="bg-beige/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal className="relative order-2 lg:order-1">
          <img
            src={aboutImage}
            alt="Marcela Maestrelli analisando documentos em seu escritório"
            width={1200}
            height={1408}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full rounded-sm object-cover shadow-soft"
          />
          <p className="mt-5 border-l border-champagne pl-4 text-[0.78rem] leading-relaxed text-muted-foreground">
            {site.oab} — dado fictício
            <br />
            Atendimento presencial em São Paulo e online para todo o Brasil.
          </p>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow">Sobre Marcela</p>
          <h2 className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]">
            Advocacia com estratégia, clareza e escuta.
          </h2>
          <div className="mt-8 space-y-6 text-[1rem] leading-relaxed text-muted-foreground">
            <p>
              Marcela Maestrelli atua na área de Direito de Família e Sucessões, oferecendo
              atendimento próximo e estratégico para pessoas que precisam tomar decisões importantes
              com segurança.
            </p>
            <p>
              Seu trabalho combina análise jurídica, comunicação clara e compreensão do contexto de
              cada cliente, buscando soluções responsáveis e alinhadas às necessidades de cada
              situação.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-sm border border-border bg-background/70 px-4 py-4"
              >
                <Icon className="size-4 shrink-0 text-champagne" strokeWidth={1.4} />
                <span className="text-[0.83rem] tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
