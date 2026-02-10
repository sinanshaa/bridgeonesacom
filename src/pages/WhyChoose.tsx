import { ShieldCheck, Headphones, Globe, Zap, Heart, Award, Users, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "We believe in complete transparency. Every step of our process is clearly communicated — no hidden charges, no surprise fees, and no ambiguous timelines. You always know exactly where your application stands." },
  { icon: Headphones, title: "End-to-End Support", desc: "From your very first consultation to business launch and beyond, we provide continuous support. Our dedicated team handles every aspect of your business setup so you can focus on your vision." },
  { icon: Globe, title: "Saudi Market Expertise", desc: "With deep knowledge of Saudi Arabia's regulatory framework, cultural nuances, and business environment, we navigate the complexities of the market with precision and confidence." },
  { icon: Zap, title: "Fast Processing", desc: "Our streamlined workflows and established government relationships enable faster processing times. We optimize every step to minimize delays and get your business operational quickly." },
  { icon: Heart, title: "Ethical & Reliable Service", desc: "Integrity is the foundation of everything we do. We maintain the highest ethical standards, ensuring honest communication, reliable deliverables, and a client-first approach." },
  { icon: Award, title: "Proven Track Record", desc: "We've successfully helped numerous businesses establish their presence in Saudi Arabia. Our experience across diverse industries gives us the expertise to handle any challenge." },
  { icon: Users, title: "Dedicated Team", desc: "Each client is assigned a dedicated relationship manager who understands your unique needs and provides personalized guidance throughout your business journey." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Whether you're a startup or an established enterprise, our solutions scale with your business. We adapt our services to match your growth trajectory and evolving needs." },
];

const WhyChoose = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">Why Choose BridgeOne</h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 text-lg">
              Discover what makes us the preferred partner for business setup in Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 60}>
                <Card className="h-full border-border/50 transition-all hover:border-accent/30 hover:shadow-md">
                  <CardContent className="flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <r.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
