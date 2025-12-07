import React from "react";
import HoverGlowCard from "../../components/HoverGlowCard";
import { getProjectsData } from "../../lib/data";
import { MotionDiv } from "../../components/MotionWrappers";

const Projects = async () => {
  const projects = await getProjectsData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 
                     text-neon-purple text-neon-glow-purple">
        Real Projects
      </h2>

      {/* Projects Grid */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <MotionDiv key={project.id} variants={itemVariants}>
            <HoverGlowCard project={project} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
};

export default Projects;
