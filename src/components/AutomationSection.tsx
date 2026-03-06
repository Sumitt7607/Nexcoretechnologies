import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Target, LayoutDashboard, Workflow, BarChart3 } from "lucide-react";

const items = [
  { icon: Target, name: "Lead Management", desc: "Automated lead capture, scoring, and nurturing with AI-powered intelligence." },
  { icon: LayoutDashboard, name: "Customer Dashboards", desc: "Real-time holographic analytics dashboards for your enterprise." },
  { icon: Workflow, name: "Automated Workflows", desc: "Self-evolving process automation that scales across dimensions." },
  { icon: BarChart3, name: "Business Analytics", desc: "Predictive analytics powered by quantum computing algorithms." },
];

const AutomationSection = () => (
  <section className="py-36 relative">
    <div className="absolute top-0 left-0 right-0 cyber-line" />
    <div className="container mx-auto px-6">
      <SectionHeading tag="◈ AUTOMATION" title="Business Automation" subtitle="Eliminate friction. Automate everything. Dominate the future." />
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass-card rounded-2xl p-8 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-all duration-500 neon-border">
              <item.icon className="w-7 h-7 text-neon-cyan" />
            </div>
            <h3 className="font-heading text-lg sm:text-xl mb-3 text-foreground">{item.name}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AutomationSection;
