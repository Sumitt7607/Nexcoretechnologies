const links = {
  Company: ["About", "Portfolio", "Process", "Contact"],
  Services: ["Web Dev", "Software", "AI Solutions", "Automation"],
  Products: ["CRM", "Dashboards", "SaaS", "AI Tools"],
};

const FooterSection = () => (
  <footer className="border-t border-border py-20 relative">
    <div className="absolute inset-0 holographic opacity-10" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-heading text-2xl gradient-text-epic tracking-widest mb-6">NEXCORE</h3>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
            Next-generation digital solutions for the businesses of tomorrow. Building the future, one pixel at a time.
          </p>
          <p className="font-mono text-xs text-primary/50 tracking-wider">SYS.VERSION // 47.0</p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-heading text-sm tracking-[0.2em] text-foreground mb-6">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <span className="text-muted-foreground text-sm font-body hover:text-primary transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="cyber-line w-full mb-8" />
      <div className="text-center">
        <p className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
          © 2025 NEXCORE TECHNOLOGIES — ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
