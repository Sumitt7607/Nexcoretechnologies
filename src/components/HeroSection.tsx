import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg scanline">
      <ParticleField />

      {/* Multiple radial glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px] floating" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] floating-delayed" />
      </div>

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orbit-ring opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] orbit-ring-reverse opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] orbit-ring opacity-10" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-10 font-mono text-[10px] text-primary/30 tracking-widest hidden lg:block">
        SYS.NEXCORE//v47.0<br/>STATUS: ONLINE<br/>QUANTUM_CORE: ACTIVE
      </div>
      <div className="absolute top-20 right-10 font-mono text-[10px] text-primary/30 tracking-widest text-right hidden lg:block">
        NEURAL_NET: SYNCED<br/>ENCRYPTION: AES-4096<br/>UPLINK: ESTABLISHED
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-mono text-sm sm:text-base text-primary mb-8 neon-glow-intense"
          >
            ◈ NEXCORE TECHNOLOGIES ◈
          </motion.p>

          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8">
            <span className="gradient-text-epic">Building</span>
            <br />
            <span className="gradient-text-epic">the Digital</span>
            <br />
            <span className="text-foreground neon-glow">Future</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-body text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed"
          >
            Next Generation Digital Solutions — <span className="text-primary neon-glow-cyan">Powered by AI</span>, Automation & Advanced Technology
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#contact"
            className="neon-button px-10 py-5 rounded-xl font-heading text-base sm:text-lg tracking-widest text-primary"
          >
            ◈ Start Your Project
          </a>
          <a
            href="#services"
            className="glass-card px-10 py-5 rounded-xl font-heading text-base sm:text-lg tracking-widest text-foreground border border-border hover:border-neon-cyan/50"
          >
            Explore Technology →
          </a>
        </motion.div>

        {/* Animated scan line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <div className="cyber-line w-full max-w-xl mx-auto" />
          <p className="font-mono text-[10px] text-primary/40 tracking-[0.5em] mt-4">SCROLL TO INITIALIZE</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
