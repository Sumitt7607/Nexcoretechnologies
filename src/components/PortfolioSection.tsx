import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Career4S",
    desc: "AI-powered career guidance platform helping students discover opportunities across India and abroad.",
    tag: "AI • CAREERS",
    image: "/career4s.png",
    link: "https://career4s.com"
  },
  {
    name: "Tensorik",
    desc: "Advanced machine learning infrastructure — next-generation AI tooling for developers.",
    tag: "ML • INFRA",
    image: "/tensorik.png",
    link: "https://tensorik.in"
  },
  {
    name: "Kaira Jewellers",
    desc: "Premium immersive e-commerce platform with modern UI and interactive product showcase.",
    tag: "E-COM • LUXURY",
    image: "/kaira.png",
    link: "https://kairajewellers.com/"
  },
  {
    name: "Navambhaw",
    desc: "Digital platform designed to modernize educational institutions and improve learning workflows.",
    tag: "EDU • SAAS",
    image: "/navambhav.png",
    link: "#"
  }
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-10 relative overflow-hidden">

    {/* holographic background */}
    <div className="absolute inset-0 holographic opacity-20" />

    <div className="container mx-auto px-6 relative z-10">

      <SectionHeading
        tag="◈ PORTFOLIO"
        title="Digital Creations"
        subtitle="Our finest technological masterpieces."
      />

      <div className="grid sm:grid-cols-2 gap-10">

        {projects.map((p, i) => (

          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
          >

            {/* IMAGE SECTION */}
            <div className="h-56 sm:h-64 relative overflow-hidden">

              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">

                <h3 className="font-heading text-2xl text-white neon-glow mb-2">
                  {p.name}
                </h3>

                <a
                  href={p.link}
                  target="_blank"
                  className="mt-2 text-primary font-mono text-sm hover:underline"
                >
                  View Project →
                </a>

              </div>

            </div>

            {/* TEXT CONTENT */}
            <div className="p-8">

              <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 mb-2 block">
                {p.tag}
              </span>

              <h3 className="font-heading text-lg sm:text-xl mb-3 text-foreground">
                {p.name}
              </h3>

              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {p.desc}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </div>

  </section>
);

export default PortfolioSection;