import { site, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className="absolute inset-0 rounded-full bg-[#128C7E] opacity-70 animate-ping" aria-hidden="true" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative z-10 size-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.763h-.004c-1.331-.039-2.624-.549-3.666-1.416l-.263-.216-2.741.718.729-2.67-.171-.282C4.689 13.563 4 11.632 4 9.625c0-3.766 3.066-6.828 6.844-6.828 1.827 0 3.543.71 4.835 1.999 1.292 1.289 2.003 3.002 2.001 4.826 0 3.766-3.066 6.829-6.844 6.829M19.96 4.045C17.645 1.729 14.529.5 11.25.5 4.613.5-.75 5.861-.75 12.5c0 2.191.57 4.327 1.653 6.216l-1.724 6.288 6.424-1.685c1.836.998 3.908 1.525 6.047 1.525h.005c6.635 0 11.999-5.361 11.999-12C22.654 8.418 21.275 6.36 19.96 4.045" />
      </svg>
    </a>
  );
}
