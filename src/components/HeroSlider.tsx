import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    tag: "Bridging Global Services",
    title: "Smart Robotics &",
    highlight: "Engineering Solutions",
    subtitle: "for the Future",
    desc: "BridgeOne delivers innovative automation and engineering solutions designed for modern industries.",
  },
  {
    image: hero2,
    tag: "Innovation & Technology",
    title: "Professional",
    highlight: "Business Setup",
    subtitle: "& Compliance",
    desc: "End-to-end company formation, licensing, and regulatory support for the GCC market.",
  },
  {
    image: hero3,
    tag: "Global Network",
    title: "Connecting",
    highlight: "India & Saudi Arabia",
    subtitle: "Seamlessly",
    desc: "We bridge global opportunities with local expertise across borders.",
  },
];

interface HeroSliderProps {
  onConsultation: () => void;
}

export const HeroSlider = ({ onConsultation }: HeroSliderProps) => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end pb-24 md:items-center md:pb-0">
        <div className="container-narrow w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-5 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                {slide.tag}
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                {slide.title}{" "}
                <span className="text-accent">{slide.highlight}</span>
                <br />
                <span className="text-white/80">{slide.subtitle}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/50 md:text-xl">
                {slide.desc}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={onConsultation}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold text-base px-10 py-6 gold-glow transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="border border-white/20 bg-white/10 text-white hover:bg-white/20 font-heading font-semibold text-base px-8 py-6 backdrop-blur-sm"
                >
                  <a href="https://wa.me/966575152994" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp Chat
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/20 text-white hover:bg-white/10 font-heading font-semibold text-base px-8 py-6"
                >
                  <a href="/BridgeOne-Profile.pdf" target="_blank" rel="noopener noreferrer">
                    <Download size={18} className="mr-2" />
                    Company Profile
                  </a>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
