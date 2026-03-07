import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Rocket, GraduationCap, Heart, ShoppingBag, Landmark, Building2, Store, ShoppingCart } from "lucide-react";

const industries = [
  { icon: Rocket, name: "Startups" },
  { icon: GraduationCap, name: "Education" },
  { icon: Heart, name: "Healthcare" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Landmark, name: "Finance" },
  { icon: Building2, name: "Real Estate" },
  { icon: Store, name: "Local Business" },
  { icon: ShoppingCart, name: "E-commerce" },
];

const IndustriesSection = () => (
  <section className="py-10 relative">
    <div className="container mx-auto px-6">
      <SectionHeading tag="◈ INDUSTRIES" title="Industries We Serve" subtitle="Transforming every sector with intelligent technology." />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-8 text-center group cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 neon-border">
              <ind.icon className="w-8 h-8 text-neon-cyan group-hover:text-primary transition-colors duration-300" />
            </div>
            <p className="font-heading text-sm sm:text-base text-foreground tracking-wider">{ind.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
