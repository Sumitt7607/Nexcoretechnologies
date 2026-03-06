import { motion } from "framer-motion";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ tag, title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    {tag && (
      <p className="font-mono text-xs sm:text-sm tracking-[0.4em] text-primary mb-4 neon-glow">{tag}</p>
    )}
    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text-epic mb-6 leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg sm:text-xl leading-relaxed">{subtitle}</p>
    )}
    <div className="mt-8 mx-auto cyber-line w-32" />
  </motion.div>
);

export default SectionHeading;
