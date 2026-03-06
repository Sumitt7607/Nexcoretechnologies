import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const techs = ["React", "Next.js", "Node.js", "MongoDB", "Cloud Infra", "AI APIs", "Automation", "TypeScript", "Python", "Docker"];

const TechStackSection = () => (
  <section className="py-36 relative">
    <div className="absolute top-0 left-0 right-0 cyber-line" />
    <div className="container mx-auto px-6">
      <SectionHeading tag="◈ TECHNOLOGY" title="Tech Arsenal" subtitle="The weapons of digital revolution." />
      <div className="flex flex-wrap justify-center gap-5">
        {techs.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="glass-card rounded-xl px-8 py-5 font-mono text-base sm:text-lg text-primary tracking-wider neon-border-intense cursor-default"
          >
            {t}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
