import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, FileText, Users, Landmark, Languages, FolderCheck, ShieldCheck, Headphones, Globe, Zap, Heart, ArrowRight, Star, CheckCircle2, Download, MessageCircle, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { FadeIn } from "@/components/FadeIn";
import logo from "@/assets/logo-new.png";

const services = [
  { icon: Building2, title: "Company Formation", desc: "End-to-end Saudi company registration — MISA, CR, and licensing support." },
  { icon: FileText, title: "Business Setup Guidance", desc: "MISA registration, investment licenses, and commercial registration." },
  { icon: Users, title: "PRO Services", desc: "Government liaison, visa processing, and administrative support." },
  { icon: Landmark, title: "Bank Account Opening", desc: "Corporate bank account setup with major Saudi banks." },
  { icon: Languages, title: "Legal Translation", desc: "Certified Arabic-English translation for legal and business documents." },
  { icon: Monitor, title: "Digital Business Services", desc: "Digital solutions for modern business operations and growth." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "No hidden fees. Clear timelines and honest communication at every step." },
  { icon: Headphones, title: "End-to-End Support", desc: "From consultation to business launch, we're with you throughout." },
  { icon: Globe, title: "Saudi Market Expertise", desc: "Deep understanding of Saudi regulations and business environment." },
  { icon: Zap, title: "Fast Processing", desc: "Streamlined workflows for quick approvals and turnaround." },
  { icon: Heart, title: "Ethical & Reliable", desc: "Built on integrity, trust, and client-first values." },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "Discuss your goals and get expert advice." },
  { num: "02", title: "Document Preparation", desc: "We handle all paperwork and filings." },
  { num: "03", title: "Government Processing", desc: "Approvals, licenses, and registrations." },
  { num: "04", title: "Business Launch", desc: "Start operating with ongoing support." },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "CEO, TechVentures KSA", text: "BridgeOne made our company formation seamless. Their expertise in Saudi regulations saved us months of effort." },
  { name: "Priya Sharma", role: "Founder, IndiaGCC Trade", text: "Professional, transparent, and incredibly efficient. They bridged every gap between India and Saudi Arabia for us." },
  { name: "Mohammed Al-Faisal", role: "Director, Gulf Investments", text: "From consultation to launch, BridgeOne delivered exactly what they promised. Highly recommended." },
];

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#112d55] to-[#1E3A8A] text-white">
        {/* Animated tech grid */}
        <div className="absolute inset-0 tech-grid animate-grid-flow opacity-30" />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(43_72%_52%/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(220_60%_35%/0.3),transparent_60%)]" />
        {/* Network lines SVG pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'grid\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 100 0 L 0 100 M 0 0 L 100 100\' stroke=\'%23ffffff\' stroke-width=\'0.5\' fill=\'none\'/%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'2\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'0\' cy=\'0\' r=\'1.5\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'1.5\' fill=\'%23ffffff\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23grid)\'/%3E%3C/svg%3E")' }} />

        <div className="container-narrow relative flex min-h-[92vh] flex-col items-center justify-center py-20 text-center">
          <FadeIn>
            <div className="mb-8 flex items-center justify-center">
              <img src={logo} alt="BridgeOne.Com" className="h-24 md:h-32 w-auto animate-float drop-shadow-[0_0_40px_hsl(43_72%_52%/0.3)]" />
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-1.5 text-sm font-medium text-accent">
              Bridging Global Services
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <h1 className="mx-auto max-w-5xl text-4xl font-heading font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl">
              Start Your Business in{" "}
              <span className="relative inline-block">
                <span className="text-accent">Saudi Arabia</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent/60 to-transparent rounded-full" />
              </span>
              <br />
              <span className="text-white/90">with Confidence</span>
            </h1>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/50 md:text-xl leading-relaxed">
              Expert company formation, compliance, and business consulting across Saudi Arabia &amp; India. We bridge global opportunities with local expertise.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-10 py-6 gold-glow transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-heading font-semibold text-base px-8 py-6 backdrop-blur-sm"
              >
                <a href="https://wa.me/966575152994" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-heading font-semibold text-base px-8 py-6"
              >
                <Download size={18} className="mr-2" />
                Company Profile
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
              {["100% Transparent", "Saudi Market Experts", "End-to-End Support", "GCC & India"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
              Who We Are
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              BridgeOne.Com is an international business services company connecting entrepreneurs, investors, and professionals with reliable and transparent solutions across Saudi Arabia and India. We specialize in company formation, compliance support, business consulting, and digital service facilitation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">Our Services</h2>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-muted-foreground">Comprehensive business solutions tailored for the Saudi & GCC market</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <Card className="group h-full border-border/50 bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-all group-hover:from-accent group-hover:to-accent/80 group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/20">
                      <s.icon size={24} />
                    </div>
                    <h3 className="mb-2 font-heading font-semibold text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-10 text-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold">
                <Link to="/services">
                  View All Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">Why Choose BridgeOne</h2>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-muted-foreground">What sets us apart in business consulting</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-br from-[#0B1F3A] via-[#112d55] to-[#1E3A8A] text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-narrow relative">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">How It Works</h2>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-white/50">A simple 4-step journey to your Saudi business</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground font-heading font-bold text-lg shadow-lg shadow-accent/30">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">What Our Clients Say</h2>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-muted-foreground">Trusted by businesses across the GCC and India</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <Card className="h-full border-border/50 transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 flex gap-1 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent font-heading font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-accent via-accent to-[#c9a030] text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white/10,transparent_50%)]" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold md:text-4xl">
              Ready to Start Your Business Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
              Get expert guidance on company formation, licensing, and business setup in Saudi Arabia. Your first consultation is free.
            </p>
            <Button
              size="lg"
              onClick={() => setDialogOpen(true)}
              className="mt-8 bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90 font-heading font-semibold text-base px-8 shadow-xl"
            >
              Get Free Consultation
            </Button>
          </FadeIn>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Index;
