import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "./ConsultationDialog";
import logo from "@/assets/logo-new.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/why-bridgeone", label: "Why BridgeOne" },
  { to: "/process", label: "Process" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1F3A]/98 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-[#0B1F3A]/95 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="container-narrow flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="BridgeOne.Com" className="h-10 md:h-12 w-auto" />
            <span className="text-xl font-heading font-bold text-white">
              Bridge<span className="text-accent">One</span>.Com
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-accent ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold gold-glow transition-all duration-300 hover:scale-105"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/10 bg-[#0B1F3A] lg:hidden">
            <nav className="container-narrow flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 ${
                    location.pathname === link.to
                      ? "text-accent bg-white/5"
                      : "text-white/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  setDialogOpen(true);
                }}
                className="mt-2 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
              >
                Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};
