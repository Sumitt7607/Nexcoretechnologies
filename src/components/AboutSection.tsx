import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Cpu, Zap, Shield } from "lucide-react";

const features = [
  { icon: Cpu, title: "Advanced AI Systems", desc: "Intelligent systems that learn, adapt, and evolve with your business in real-time." },
  { icon: Zap, title: "Hyper Automation", desc: "End-to-end digital workflows that eliminate every manual bottleneck." },
  { icon: Shield, title: "Enterprise Grade Security", desc: "Military-grade encrypted infrastructure built for the quantum age." },
];

const AboutSection = () => (
  <section id="about" className="py-36 relative overflow-hidden">
    <div className="absolute inset-0 holographic opacity-30" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading
        tag="◈ ABOUT US"
        title="Who We Are"
        subtitle="Nexcore Technologies empowers businesses with next-generation digital infrastructure — from AI-driven intelligence to complete digital transformation ecosystems."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 50, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="glass-card rounded-2xl p-10 text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10 flex items-center justify-center neon-border-intense group-hover:bg-primary/20 transition-all duration-500">
              <f.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl mb-4 text-foreground tracking-wide">{f.title}</h3>
            <p className="text-muted-foreground text-base font-body leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
