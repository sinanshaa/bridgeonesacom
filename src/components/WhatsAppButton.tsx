import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const whatsappNumbers = [
  { label: "Saudi Arabia / GCC", phone: "966575152994", flag: "🇸🇦" },
  { label: "India", phone: "918943756296", flag: "🇮🇳" },
];

export const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent("Hello BridgeOne! I'm interested in your business services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-1 w-64 rounded-xl border border-border bg-card p-4 shadow-xl animate-fade-up">
          <p className="mb-3 text-sm font-heading font-semibold text-foreground">Chat with us on WhatsApp</p>
          <div className="space-y-2">
            {whatsappNumbers.map((n) => (
              <a
                key={n.phone}
                href={`https://wa.me/${n.phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-3 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent/5"
              >
                <span className="text-lg">{n.flag}</span>
                <div>
                  <p className="font-medium">{n.label}</p>
                  <p className="text-xs text-muted-foreground">+{n.phone.replace(/(\d{2,3})(\d+)/, "$1 $2")}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        {open ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};
