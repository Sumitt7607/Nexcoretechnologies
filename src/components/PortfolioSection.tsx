import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  { name: "Career4s", desc: "AI-powered career platform with intelligent job matching and quantum skill analysis.", tag: "AI • CAREERS" },
  { name: "Tensorik", desc: "Advanced machine learning infrastructure — next-gen AI tooling for developers.", tag: "ML • INFRA" },
  { name: "Kaira Jewellers", desc: "Premium immersive e-commerce with holographic product visualization.", tag: "E-COM • LUXURY" },
  { name: "Navambhav", desc: "Digital transformation platform revolutionizing educational institutions.", tag: "EDU • SAAS" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-36 relative overflow-hidden">
    <div className="absolute inset-0 holographic opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading tag="◈ PORTFOLIO" title="Digital Creations" subtitle="Our finest technological masterpieces." />
      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="h-56 sm:h-64 relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              {/* Orbit decoration */}
              <div className="absolute w-48 h-48 orbit-ring opacity-20" />
              <div className="absolute w-32 h-32 orbit-ring-reverse opacity-15" />
              <span className="font-heading text-3xl sm:text-4xl tracking-[0.2em] text-foreground neon-glow-intense relative z-10 group-hover:scale-110 transition-transform duration-700">
                {p.name}
              </span>
            </div>
            <div className="p-8">
              <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-2 block">{p.tag}</span>
              <h3 className="font-heading text-lg sm:text-xl mb-3 text-foreground">{p.name}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
