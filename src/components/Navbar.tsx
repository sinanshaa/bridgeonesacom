import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "./ConsultationDialog";
import logo from "@/assets/logo-new.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B1F3A]/95 backdrop-blur-xl shadow-2xl shadow-black/30 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container-narrow flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="BridgeOne.Com"
              className="h-10 md:h-12 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-heading font-bold text-white">
              Bridge<span className="text-accent">One</span>.Com
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold rounded-full px-6 gold-glow transition-all duration-300 hover:scale-105"
            >
              Talk to Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-[#0B1F3A]/98 backdrop-blur-xl">
            <nav className="container-narrow flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-accent bg-white/5"
                      : "text-white/70 hover:text-white hover:bg-white/5"
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
                className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold rounded-full"
              >
                Talk to Us
              </Button>
            </nav>
          </div>
        )}
      </header>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};
