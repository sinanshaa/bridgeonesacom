import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, FileText, Users, Landmark, Languages, FolderCheck, ShieldCheck, Headphones, Globe, Zap, Heart, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { FadeIn } from "@/components/FadeIn";

const services = [
  { icon: Building2, title: "Company Formation", desc: "End-to-end Saudi company registration and licensing support." },
  { icon: FileText, title: "Business Setup Guidance", desc: "MISA registration, investment licenses, and commercial registration." },
  { icon: Users, title: "PRO Services", desc: "Government liaison, visa processing, and administrative support." },
  { icon: Landmark, title: "Bank Account Opening", desc: "Assistance with corporate bank account setup in Saudi Arabia." },
  { icon: Languages, title: "Legal Translation", desc: "Certified Arabic-English translation for legal and business documents." },
  { icon: FolderCheck, title: "Documentation Support", desc: "Complete documentation preparation and application management." },
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
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.15),transparent_60%)]" />
        <div className="container-narrow relative flex min-h-[85vh] flex-col items-center justify-center py-20 text-center">
          <FadeIn>
            <div className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-5 py-1.5 text-sm font-medium text-accent">
              Bridging Global Services
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mx-auto max-w-4xl text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-6xl">
              Start Your Business in Saudi Arabia{" "}
              <span className="text-accent">with Confidence</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70 md:text-xl">
              Expert company formation, compliance, and business consulting across Saudi Arabia &amp; India. We bridge global opportunities with local expertise.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-8"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold text-base px-8"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">
              Who We Are
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              BridgeOne.Com is an international business services company connecting entrepreneurs, investors, and professionals with reliable and transparent solutions across Saudi Arabia and India. We specialize in company formation, compliance support, business consulting, and digital service facilitation — with a strong focus on ethics, efficiency, and customer support.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground">Comprehensive business solutions tailored for the Saudi market</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <Card className="group h-full border-border/50 bg-card transition-all hover:border-accent/30 hover:shadow-lg">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
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
              <Button asChild variant="outline" className="font-heading font-semibold">
                <Link to="/services">
                  View All Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">Why Choose BridgeOne</h2>
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
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground md:text-4xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground">A simple 4-step journey to your Saudi business</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold md:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 text-primary-foreground/60">Trusted by businesses across the GCC and India</p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                  <div className="mb-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent font-heading font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-primary-foreground/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-narrow text-center">
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
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold text-base px-8"
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
