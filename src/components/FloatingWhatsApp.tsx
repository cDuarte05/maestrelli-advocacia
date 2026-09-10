import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

/** Discreet floating contact link — pill shape, icon + label on desktop. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#5A8C7A]/20 bg-[#5A8C7A] px-4 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:bg-[#4A7566] hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:bottom-7 sm:right-7"
    >
      <MessageCircle aria-hidden="true" size={18} />
      <span className="hidden sm:inline">Conversar no WhatsApp</span>
      <span className="sr-only sm:hidden">Conversar no WhatsApp</span>
    </a>
  );
}
