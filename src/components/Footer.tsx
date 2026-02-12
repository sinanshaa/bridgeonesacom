import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-new.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="container-narrow py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BridgeOne.Com" className="h-12 w-auto" />
              <span className="text-lg font-heading font-bold">
                Bridge<span className="text-accent">One</span>.Com
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Bridging global opportunities with local aspirations. Expert business services across Saudi Arabia, UAE, GCC &amp; India.
            </p>
            <div className="mt-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              Trusted GCC Business Partner
            </div>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all hover:bg-accent/20 hover:text-accent"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-accent">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-white/60">
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
            <h4 className="mb-4 font-heading font-semibold text-accent">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              <li>Company Formation</li>
              <li>MISA Registration</li>
              <li>PRO Services</li>
              <li>Bank Account Opening</li>
              <li>Legal Translation</li>
              <li>Digital Business Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading font-semibold text-accent">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Building No: 6846, Al Malaz, Riyadh, Saudi Arabia – 12331</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>🇸🇦 +966 57 515 2994</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-accent" />
                <span>🇮🇳 +91 8943 756 296</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-accent" />
                <span>info@bridgeonedot.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} BridgeOne.Com — All rights reserved. | Trusted Business Partner in Saudi Arabia &amp; India
        </div>
      </div>
    </footer>
  );
};
