import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phone = "966575152994";
  const message = encodeURIComponent("Hello BridgeOne! I'm interested in your business services.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
};
