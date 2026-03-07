import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const plans = [
  { name: "Starter Website", price: "₹3,500", features: ["Responsive Design", "5 Pages", "Contact Form", "SEO Basics", "1 Month Support"], highlight: false },
  { name: "Professional Website", price: "₹8,000", features: ["Custom Design System", "10+ Pages", "CMS Integration", "Advanced Analytics", "SEO Pro", "3 Months Support"], highlight: true },
  { name: "Advanced Custom System", price: "₹25,000+", features: ["Full Stack Application", "AI Integration", "Automation Engine", "Admin Dashboard", "API Development", "Ongoing Support"], highlight: false },
];

const PricingSection = () => (
  <section id="pricing" className="py-10 relative overflow-hidden">
    <div className="absolute inset-0 holographic opacity-15" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading tag="◈ PRICING" title="Investment Plans" subtitle="Website Development starting at ₹3,500 — Future-proof technology at revolutionary prices." />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className={`rounded-3xl p-10 relative ${p.highlight ? "glass-card neon-border-intense" : "glass-card"}`}
          >
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-primary/20 border border-primary/50 neon-border">
                <span className="font-mono text-xs text-primary tracking-[0.3em] neon-glow">MOST POPULAR</span>
              </div>
            )}
            <h3 className="font-heading text-lg sm:text-xl mb-3 text-foreground tracking-wider">{p.name}</h3>
            <p className="font-heading text-4xl sm:text-5xl gradient-text-epic mb-8">{p.price}</p>
            <ul className="space-y-4 mb-10">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                  <span className="w-2 h-2 rounded-full bg-primary pulse-glow" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block neon-button text-center py-4 rounded-xl font-heading text-sm text-primary tracking-widest">
              Get Started →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
