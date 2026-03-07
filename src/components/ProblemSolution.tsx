import { Zap, ShieldCheck, Gauge } from "lucide-react";

export default function ProblemSolution() {

  const problems = [
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "Slow & Outdated Websites",
      problem:
        "Many businesses still rely on outdated digital platforms that load slowly and fail to deliver a smooth user experience.",
      solution:
        "We develop high-performance web applications using modern technologies that ensure fast loading speeds, responsive interfaces, and scalable architecture."
    },
    {
      icon: <Gauge className="text-purple-400" size={32} />,
      title: "Poor User Experience",
      problem:
        "Complex navigation, outdated interfaces, and inconsistent design often lead to user frustration and low engagement.",
      solution:
        "Our design approach focuses on intuitive user interfaces and seamless digital experiences that keep users engaged and improve conversions."
    },
    {
      icon: <ShieldCheck className="text-blue-400" size={32} />,
      title: "Security & Scalability Issues",
      problem:
        "Weak infrastructure and poor security practices can make digital systems vulnerable and difficult to scale.",
      solution:
        "We build secure, scalable systems using modern frameworks and best development practices to ensure long-term reliability."
    }
  ];

  return (
    <section className="py-10 grid-bg">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-bold gradient-text neon-glow mb-16">
          Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {problems.map((item, index) => (

            <div key={index} className="glass-card p-8 rounded-xl">

              <div className="mb-5">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {item.problem}
              </p>

              <p className="text-cyan-400 text-sm">
                {item.solution}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}