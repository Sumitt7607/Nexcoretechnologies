import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Satisfied Clients" },
  { value: 80, suffix: "+", label: "Businesses Digitized" },
  { value: 30, suffix: "+", label: "Technologies Used" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => (
  <section className="py-28 relative">
    <div className="absolute top-0 left-0 right-0 cyber-line" />
    <div className="absolute bottom-0 left-0 right-0 cyber-line" />
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="text-center"
          >
            <p className="font-heading text-5xl sm:text-6xl lg:text-7xl gradient-text-epic mb-3 neon-glow">
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-[0.2em]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
