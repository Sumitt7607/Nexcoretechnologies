import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", role: "CEO, TechVentures", text: "Nexcore transformed our entire digital infrastructure. Their AI solutions are truly from another era — absolute game changers!" },
  { name: "Priya Patel", role: "Founder, EduStart", text: "The team delivered a platform that exceeded all expectations. Incredible attention to detail and futuristic design thinking." },
  { name: "Amit Kumar", role: "CTO, RetailMax", text: "Their automation systems saved us hundreds of hours monthly. The ROI was visible within the first week. Unbelievable." },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-36 relative">
      <div className="container mx-auto px-6">
        <SectionHeading tag="◈ TESTIMONIALS" title="Client Voices" />
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-12 sm:p-16 text-center neon-border-intense relative"
          >
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="text-foreground font-body text-lg sm:text-xl leading-relaxed mb-8">
              "{testimonials[active].text}"
            </p>
            <p className="font-heading text-lg text-foreground neon-glow">{testimonials[active].name}</p>
            <p className="font-mono text-sm text-primary tracking-wider">{testimonials[active].role}</p>
          </motion.div>
          <div className="flex justify-center gap-6 mt-8">
            <button onClick={prev} className="glass-card p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 neon-border">
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8 neon-border" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="glass-card p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 neon-border">
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
