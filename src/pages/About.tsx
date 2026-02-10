import { Eye, Target, Lightbulb, Monitor, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">About BridgeOne</h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 text-lg">
              Connecting entrepreneurs, investors, and professionals with reliable solutions across Saudi Arabia and India.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground">Our Story</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                BridgeOne.Com was founded with a singular vision — to bridge the gap between global business opportunities and local aspirations. We recognized that entrepreneurs and investors seeking to establish their presence in Saudi Arabia often face complex regulatory environments, language barriers, and operational challenges. BridgeOne was created to eliminate these hurdles through professional consultancy, digital efficiency, and human-centered support.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full border-accent/20">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To become a trusted bridge between global opportunities and local aspirations by delivering ethical, efficient, and accessible business services that empower entrepreneurs worldwide.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={100}>
            <Card className="h-full border-accent/20">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Our Mission</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <li>• Simplify company formation and compliance in Saudi Arabia</li>
                  <li>• Provide reliable remote digital and customer support</li>
                  <li>• Ensure transparency and clear guidance at every step</li>
                  <li>• Build a performance-driven and ethical service ecosystem</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <FadeIn>
            <h2 className="text-center text-3xl font-heading font-bold text-foreground">Our Approach</h2>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Lightbulb, title: "Professional Consultancy", desc: "Expert guidance tailored to your business goals, industry, and target market in Saudi Arabia." },
              { icon: Monitor, title: "Digital Efficiency", desc: "Leveraging technology for streamlined processes, real-time updates, and seamless communication." },
              { icon: Heart, title: "Human Support", desc: "Dedicated relationship managers who understand your needs and provide personalized service." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding">
        <div className="container-narrow">
          <FadeIn>
            <h2 className="text-center text-3xl font-heading font-bold text-foreground">Global Presence</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Strategically positioned to serve clients across the GCC and South Asia
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { country: "Saudi Arabia", city: "Riyadh", desc: "Our headquarters in the heart of Saudi Arabia's capital, providing on-ground support for all business setup needs." },
              { country: "India", city: "Multiple Cities", desc: "Regional support offices facilitating documentation, translation, and remote client services across India." },
            ].map((loc, i) => (
              <FadeIn key={loc.country} delay={i * 100}>
                <Card className="border-border/50">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{loc.country}</h3>
                      <p className="text-sm text-accent font-medium">{loc.city}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{loc.desc}</p>
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

export default About;
