import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "./ConsultationDialog";
import logo from "@/assets/logo-transparent.png";

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
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="container-narrow flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="BridgeOne.Com" className="h-9 md:h-11 w-auto brightness-0 invert" />
            <span className="text-xl font-heading font-bold text-primary-foreground">
              Bridge<span className="text-accent">One</span>.Com
            </span>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.to
                    ? "text-accent"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => setDialogOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
            <nav className="container-narrow flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary-foreground/10 ${
                    location.pathname === link.to
                      ? "text-accent bg-primary-foreground/10"
                      : "text-primary-foreground/80"
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
