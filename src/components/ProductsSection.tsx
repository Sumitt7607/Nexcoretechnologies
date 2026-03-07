import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { LayoutDashboard, Workflow, Bot, BarChart3, Users, Layers } from "lucide-react";

const products = [
  { icon: LayoutDashboard, name: "Business Management Systems", color: "from-primary/20 to-neon-cyan/5" },
  { icon: Workflow, name: "Automation Tools", color: "from-secondary/20 to-primary/5" },
  { icon: Bot, name: "AI Tools", color: "from-neon-cyan/20 to-secondary/5" },
  { icon: BarChart3, name: "Custom Dashboards", color: "from-neon-gold/15 to-primary/5" },
  { icon: Users, name: "CRM Systems", color: "from-primary/15 to-neon-cyan/5" },
  { icon: Layers, name: "SaaS Platforms", color: "from-secondary/15 to-neon-cyan/5" },
];

const ProductsSection = () => (
  <section id="products" className="py-5 relative">
    <div className="container mx-auto px-6">
      <SectionHeading tag="◈ PRODUCTS" title="Digital Products" subtitle="Advanced technology products built for the enterprises of tomorrow." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.85, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-10 flex items-center gap-6 group cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 shrink-0 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/25 transition-all duration-500 neon-border">
                <p.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-base sm:text-lg text-foreground tracking-wide">{p.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
