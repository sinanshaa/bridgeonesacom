import { useState } from "react";
import { MessageSquare, FileCheck, Building, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Free Consultation",
    desc: "Share your business goals with us. We'll assess your needs, explain the process, and provide a clear roadmap tailored to your objectives in Saudi Arabia.",
    details: ["Understand your business model", "Assess legal requirements", "Provide cost estimates", "Outline the complete timeline"],
  },
  {
    icon: FileCheck,
    num: "02",
    title: "Document Preparation",
    desc: "Our team prepares all required documentation, ensures proper translation and attestation, and organizes every detail for a smooth submission process.",
    details: ["Gather required documents", "Certified legal translation", "Attestation & legalization", "Quality review & verification"],
  },
  {
    icon: Building,
    num: "03",
    title: "Government Processing",
    desc: "We manage all interactions with Saudi government authorities — from MISA registration and commercial licenses to municipality approvals and chamber registration.",
    details: ["MISA registration", "License applications", "Commercial registration", "Municipality & chamber approvals"],
  },
  {
    icon: Rocket,
    num: "04",
    title: "Business Launch & Ongoing Support",
    desc: "Once your business is officially established, we continue supporting you with bank account setup, PRO services, and ongoing compliance assistance.",
    details: ["Corporate bank account opening", "Visa & work permit processing", "Ongoing PRO services", "Compliance monitoring"],
  },
];

const Process = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">Our Process</h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 text-lg">
              A simple, transparent 4-step journey to launching your business in Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 80}>
                <div className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className="mb-3 text-sm font-heading font-bold text-accent">STEP {step.num}</div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">{step.title}</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                      <step.icon size={56} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-heading font-bold text-foreground">Ready to Get Started?</h3>
              <p className="mt-3 text-muted-foreground">Begin with a free consultation — no obligations, no hidden fees.</p>
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
              >
                Book Free Consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Process;
