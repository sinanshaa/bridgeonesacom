import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";

const faqs = [
  { q: "How long does it take to set up a company in Saudi Arabia?", a: "The timeline varies depending on the type of entity and license. Generally, a full company setup including MISA registration, commercial registration, and all approvals takes 4–8 weeks. BridgeOne's streamlined process helps minimize delays." },
  { q: "What documents are required to start a business in Saudi Arabia?", a: "Key documents typically include: passport copies of shareholders/directors, company memorandum and articles of association, proof of address, bank reference letters, and power of attorney. We provide a complete checklist based on your specific business type." },
  { q: "How much does it cost to form a company in Saudi Arabia?", a: "Costs depend on the entity type, license category, and scope of services. We provide transparent, detailed cost estimates during the initial consultation with no hidden charges. Contact us for a personalized quote." },
  { q: "Who is eligible to start a business in Saudi Arabia?", a: "Both Saudi nationals and foreign investors can establish businesses. Foreign investors typically need a MISA (Ministry of Investment) license. Certain sectors may have restrictions or require local partners. We'll advise you on eligibility based on your plans." },
  { q: "Do I need to be physically present in Saudi Arabia to start a business?", a: "While some steps may require physical presence (such as certain bank account openings), much of the process can be handled remotely through our power of attorney services. We'll guide you on what requires your presence." },
  { q: "Can BridgeOne help with ongoing compliance after company formation?", a: "Absolutely. We offer ongoing PRO services, compliance monitoring, license renewals, and government liaison support to ensure your business remains fully compliant with Saudi regulations." },
  { q: "What types of business entities can be formed in Saudi Arabia?", a: "Common entity types include Limited Liability Company (LLC), branch office, representative office, and joint stock company. We'll recommend the best structure based on your business objectives and investment plans." },
  { q: "Does BridgeOne provide services in India as well?", a: "Yes, we have operations in India providing documentation support, translation services, and client coordination. This dual presence allows us to serve clients efficiently across both regions." },
];

const FAQ = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow text-center">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">Frequently Asked Questions</h1>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70 text-lg">
              Everything you need to know about starting a business in Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FAQ;
