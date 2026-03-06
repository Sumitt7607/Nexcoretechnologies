import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { name: "Discovery", desc: "Deep analysis of your vision and requirements" },
  { name: "Planning", desc: "Strategic blueprint and technology mapping" },
  { name: "Design", desc: "Futuristic UI/UX crafted for impact" },
  { name: "Development", desc: "Quantum-speed agile development cycles" },
  { name: "Testing", desc: "Rigorous quality assurance protocols" },
  { name: "Launch", desc: "Deployment and go-live orchestration" },
  { name: "Optimization", desc: "Continuous evolution and performance tuning" },
];

const ProcessSection = () => (
  <section id="process" className="py-36 relative overflow-hidden">
    <div className="absolute inset-0 holographic opacity-15" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading tag="◈ PROCESS" title="Development Process" subtitle="A precision-engineered journey from concept to reality." />
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing vertical line */}
        <div className="absolute left-8 top-0 bottom-0 cyber-line-vertical" />
        {steps.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex items-start gap-8 mb-10 last:mb-0"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl glass-card flex items-center justify-center neon-border-intense relative z-10">
              <span className="font-heading text-lg text-primary neon-glow">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="glass-card rounded-2xl px-8 py-6 flex-1">
              <h3 className="font-heading text-lg sm:text-xl text-foreground tracking-wider mb-2">{s.name}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
