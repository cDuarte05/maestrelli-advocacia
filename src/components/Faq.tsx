import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

export const faqs = [
  {
    q: "A consulta pode ser realizada online?",
    a: "Sim. O atendimento pode ser realizado presencialmente ou por videochamada.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "Uma conversa inicial para compreender a situação e orientar sobre os próximos passos.",
  },
  {
    q: "Quais documentos devo apresentar?",
    a: "Os documentos necessários variam conforme cada situação.",
  },
  {
    q: "A Dra. Marcela atende clientes de outros estados?",
    a: "Sim. O atendimento online permite atender clientes de diferentes regiões do Brasil.",
  },
  {
    q: "Quanto custa uma consulta?",
    a: "Os valores variam conforme o serviço e a complexidade do caso. Entre em contato para consultar disponibilidade.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-beige/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="display mt-6 text-[2.1rem] sm:text-[2.6rem] lg:text-[2.9rem]">
            Dúvidas comuns antes do primeiro contato.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left font-serif text-[1.25rem] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-xl pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
