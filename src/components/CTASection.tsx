import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-40 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/8 to-primary/5" />
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute inset-0 holographic opacity-20" />

    {/* Orbit rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] orbit-ring opacity-10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] orbit-ring-reverse opacity-15" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="font-mono text-sm tracking-[0.4em] text-primary mb-6 neon-glow">◈ INITIALIZE TRANSFORMATION ◈</p>
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold gradient-text-epic mb-8 leading-tight">
          Ready to Transform<br />Your Business Digitally?
        </h2>
        <p className="text-muted-foreground font-body text-xl sm:text-2xl mb-14 max-w-2xl mx-auto">
          Let's build something the world has never seen before.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#contact" className="neon-button px-12 py-5 rounded-xl font-heading text-lg tracking-widest text-primary">
            ◈ Start Your Project
          </a>
          <a
            href="https://wa.me/917607696315"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-12 py-5 rounded-xl font-heading text-lg tracking-widest text-neon-cyan border border-neon-cyan/40 hover:border-neon-cyan/80 transition-all"
          >
            WhatsApp Us →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
