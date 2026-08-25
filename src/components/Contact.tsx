import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { site, whatsappMessage } from "@/lib/site";

const areas = [
  "Divórcio e Dissolução de União Estável",
  "Guarda e Pensão Alimentícia",
  "Inventário e Sucessões",
  "Planejamento Familiar e Patrimonial",
  "Outro assunto",
];

const initial = { nome: "", email: "", whatsapp: "", area: "", mensagem: "" };

export function Contact() {
  const [form, setForm] = useState(initial);

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      whatsappMessage,
      "",
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      form.area ? `Área de interesse: ${form.area}` : "",
      form.mensagem ? `Mensagem: ${form.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Mensagem preparada", {
      description: "Projeto demonstrativo: sua mensagem foi encaminhada para o WhatsApp.",
    });
    setForm(initial);
  };

  const fieldClass =
    "w-full rounded-sm border border-input bg-background px-4 py-3 text-[0.92rem] text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-champagne focus:outline-none focus-visible:ring-1 focus-visible:ring-ring";
  const labelClass = "mb-2 block text-[0.72rem] tracking-[0.16em] uppercase text-muted-foreground";

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="display mt-6 text-[2.2rem] sm:text-[2.8rem] lg:text-[3.1rem]">
            Vamos conversar?
          </h2>
          <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-muted-foreground">
            Envie sua mensagem ou fale diretamente pelo WhatsApp. O primeiro contato é uma conversa
            para entender a sua situação.
          </p>

          <ul className="mt-10 space-y-5 text-[0.95rem]">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-champagne" strokeWidth={1.5} />
              {site.city}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-champagne" strokeWidth={1.5} />
              <a href={`tel:+${site.phoneRaw}`} className="hover:text-champagne">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-champagne" strokeWidth={1.5} />
              <a href={`mailto:${site.email}`} className="break-all hover:text-champagne">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="size-4 text-champagne" strokeWidth={1.5} />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne"
              >
                {site.instagram}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={110}>
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-border bg-card p-8 shadow-soft lg:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  autoComplete="name"
                  className={fieldClass}
                  value={form.nome}
                  onChange={(e) => update("nome")(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  value={form.email}
                  onChange={(e) => update("email")(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(11) 90000-0000"
                  className={fieldClass}
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp")(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="area">
                  Área de interesse
                </label>
                <select
                  id="area"
                  name="area"
                  className={fieldClass}
                  value={form.area}
                  onChange={(e) => update("area")(e.target.value)}
                >
                  <option value="">Selecione</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className={labelClass} htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                className={`${fieldClass} resize-y`}
                value={form.mensagem}
                onChange={(e) => update("mensagem")(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-charcoal px-8 py-4 text-[0.78rem] tracking-[0.16em] uppercase text-charcoal-foreground transition-colors hover:bg-charcoal/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              <MessageCircle className="size-4" />
              Enviar mensagem
            </button>
            <p className="mt-4 text-[0.72rem] leading-relaxed text-muted-foreground">
              Projeto demonstrativo: o envio abre uma conversa no WhatsApp com os dados preenchidos.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
