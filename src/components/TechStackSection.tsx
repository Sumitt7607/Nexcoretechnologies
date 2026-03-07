import SectionHeading from "./SectionHeading";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiPython,
  SiDocker
} from "react-icons/si";

import { FaCloud } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbAutomation } from "react-icons/tb";

const techs = [
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Cloud", icon: <FaCloud /> },
  { name: "AI APIs", icon: <GiArtificialIntelligence /> },
  { name: "Automation", icon: <TbAutomation /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Docker", icon: <SiDocker /> }
];

const TechStackSection = () => {

  const radius = 170;

  return (
    <section className="py-10 relative overflow-hidden">

      <div className="container mx-auto px-6">

        <SectionHeading
          tag="◈ TECHNOLOGY"
          title="Tech Arsenal"
          subtitle="The weapons of digital revolution."
        />

        <div className="tech-orbit-container">

          {/* Center */}
          <div className="orbit-center">
            Nexcore
          </div>

          {/* Orbit ring */}
          <div className="orbit-ring">

            {techs.map((tech, i) => {

              const angle = (i / techs.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <div
                  key={tech.name}
                  className="orbit-item"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="tech-icon">
                    {tech.icon}
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default TechStackSection;