import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AIFutureSection = () => (
  <section className="py-10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
    <div className="absolute inset-0 holographic opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading tag="◈ THE FUTURE" title="AI & Future Tech" subtitle="Pioneering the next frontier of intelligent digital systems." />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-card rounded-3xl p-5 sm:p-1 max-w-4xl mx-auto text-center neon-border-intense relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10">
          <p className="text-muted-foreground font-body text-lg sm:text-xl leading-relaxed mb-10">
            At Nexcore, we architect <span className="text-primary neon-glow-cyan">AI-powered intelligence</span>, autonomous automation systems, predictive analytics engines, and <span className="text-secondary neon-glow-purple">next-generation digital ecosystems</span> that position your business at the absolute forefront of technological evolution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI Intelligence", "Smart Analytics", "Autonomous Systems", "Quantum Computing", "Neural Networks"].map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full glass-card font-mono text-sm text-primary tracking-wider neon-border cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AIFutureSection;
