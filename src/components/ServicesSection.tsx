import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Globe, Code, Brain, Settings, Smartphone, Cloud, Rocket, RefreshCw } from "lucide-react";

const services = [
  { icon: Globe, name: "Website Development", desc: "Futuristic web experiences with cutting-edge interfaces." },
  { icon: Code, name: "Software Development", desc: "Custom software engineered for maximum performance." },
  { icon: Brain, name: "AI Solutions", desc: "Intelligent AI-powered tools and cognitive automation." },
  { icon: Settings, name: "Business Automation", desc: "Advanced workflow automation that scales infinitely." },
  { icon: Smartphone, name: "Mobile Apps", desc: "Native and cross-platform mobile experiences." },
  { icon: Cloud, name: "Cloud Systems", desc: "Scalable cloud infrastructure and quantum deployment." },
  { icon: Rocket, name: "Startup Tech", desc: "Complete technology ecosystems for startups." },
  { icon: RefreshCw, name: "Digital Transformation", desc: "End-to-end digital evolution solutions." },
];

const ServicesSection = () => (
  <section id="services" className="py-36 relative">
    <div className="absolute top-0 left-0 right-0 cyber-line" />
    <div className="container mx-auto px-6">
      <SectionHeading
        tag="◈ SERVICES"
        title="Technology Solutions"
        subtitle="Comprehensive digital services engineered for the next era of civilization."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
          >
            {/* Holographic overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-secondary/5 transition-all duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500 neon-border">
                <s.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-base sm:text-lg mb-3 text-foreground tracking-wide">{s.name}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
