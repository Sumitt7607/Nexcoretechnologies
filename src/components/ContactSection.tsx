import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0ADetails: ${form.details}`;
    window.open(`https://wa.me/917607696315?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-36 relative">
      <div className="container mx-auto px-6">
        <SectionHeading tag="◈ CONTACT" title="Get In Touch" subtitle="Initiate your digital transformation journey." />
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-10 sm:p-14 max-w-2xl mx-auto neon-border-intense space-y-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative z-10 space-y-8">
            <div>
              <label className="font-mono text-xs tracking-[0.3em] text-primary block mb-3">YOUR NAME</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-6 py-4 text-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsla(200,100%,55%,0.2)] transition-all duration-300"
                placeholder="Enter your name..."
              />
            </div>
            <div>
              <label className="font-mono text-xs tracking-[0.3em] text-primary block mb-3">EMAIL ADDRESS</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-6 py-4 text-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsla(200,100%,55%,0.2)] transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs tracking-[0.3em] text-primary block mb-3">PROJECT DETAILS</label>
              <textarea
                required
                rows={5}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-xl px-6 py-4 text-foreground font-body text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsla(200,100%,55%,0.2)] transition-all duration-300 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button type="submit" className="w-full neon-button py-5 rounded-xl font-heading text-base tracking-widest text-primary flex items-center justify-center gap-3">
              <Send className="w-5 h-5" /> Send Message
            </button>
            <a
              href="https://wa.me/917607696315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-neon-cyan font-mono text-sm tracking-wider mt-6 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Or Chat Directly on WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
