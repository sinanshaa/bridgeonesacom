import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="BridgeOne.Com" className="h-10 w-auto brightness-0 invert" />
              <span className="text-lg font-heading font-bold">
                Bridge<span className="text-accent">One</span>.Com
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Bridging global opportunities with local aspirations. Expert business services across Saudi Arabia &amp; India.
            </p>
            <div className="mt-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              Serving GCC &amp; India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/why-bridgeone", label: "Why BridgeOne" },
                { to: "/process", label: "Our Process" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading font-semibold">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>Company Formation</li>
              <li>Business Setup Guidance</li>
              <li>PRO Services</li>
              <li>Bank Account Opening</li>
              <li>Legal Translation</li>
              <li>Documentation Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Building No: 6846, Al Malaz, Riyadh, Saudi Arabia – 12331</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+966 57 515 2994</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>+91 8943 756 296</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@bridgeonedot.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} BridgeOne.Com — All rights reserved.
        </div>
      </div>
    </footer>
  );
};
