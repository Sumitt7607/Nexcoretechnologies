import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Services", "Products", "Portfolio", "Process", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-heading text-xl tracking-[0.3em] gradient-text-epic">
          NEXCORE
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider hover:neon-glow"
            >
              {l}
            </a>
          ))}
          <a href="#contact" className="neon-button px-6 py-2.5 rounded-lg font-heading text-xs tracking-widest text-primary">
            Contact
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass-panel overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
