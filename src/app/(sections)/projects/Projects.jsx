import React from 'react';
import HoverGlowCard from '../../components/HoverGlowCard';
import { getProjectsData } from '../../lib/data';
// REMOVED: import { motion } from 'framer-motion'; 
// NEW: Import the motion wrapper from the client file
import { MotionDiv } from '../../components/MotionWrappers'; 

const Projects = async () => { // Async function = Server Component
  const projects = await getProjectsData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-neon-purple text-neon-glow-purple">
        Real Projects
      </h2>

      <MotionDiv // Outer container (Line 31)
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          // Inner element for each project card (Line 39)
          <MotionDiv 
            key={project.id} 
            variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
          >
            <HoverGlowCard project={project} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
};

export default Projects;