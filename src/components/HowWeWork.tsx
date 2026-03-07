import { Search, PencilRuler, Code, Rocket } from "lucide-react";

export default function HowWeWork() {

  const steps = [
    {
      icon: <Search size={32} className="text-cyan-400" />,
      title: "Discovery",
      desc:
        "We begin by understanding your business objectives, challenges, and technical requirements to define the right digital strategy."
    },
    {
      icon: <PencilRuler size={32} className="text-purple-400" />,
      title: "Design",
      desc:
        "Our design process focuses on creating visually engaging interfaces while ensuring usability and accessibility."
    },
    {
      icon: <Code size={32} className="text-blue-400" />,
      title: "Development",
      desc:
        "Our engineers build scalable, high-performance applications using modern frameworks and clean development practices."
    },
    {
      icon: <Rocket size={32} className="text-pink-400" />,
      title: "Launch & Optimization",
      desc:
        "After deployment, we monitor performance and continuously optimize the platform for reliability and growth."
    }
  ];

  return (
    <section className="py-10 grid-bg">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold gradient-text neon-glow mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {steps.map((step, i) => (

            <div key={i} className="glass-card p-8 text-center rounded-xl">

              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}