import React from 'react';
import GlassCard from '../../components/GlassCard';
import SkillBar from '../../components/SkillBar';
import { getSkillsData } from '../../lib/data';
import { FaCode, FaTerminal, FaPencilAlt, FaMobileAlt } from 'react-icons/fa';
// REMOVED: import { motion } from 'framer-motion'; 
// NEW: Import the motion wrappers from the client file
import { MotionDiv } from '../../components/MotionWrappers'; 

const iconMap = {
  FaCode,
  FaTerminal,
  FaPencilAlt,
  FaMobileAlt,
};

const Skills = async () => { // Async function = Server Component
  const skillsData = await getSkillsData();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-neon-cyan text-neon-glow-cyan">
        Verified Skills
      </h2>

      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillsData.map((category, index) => {
          const IconComponent = iconMap[category.icon];
          return (
            <MotionDiv key={index} variants={itemVariants}>
              <GlassCard className="p-6">
                <div className="flex items-center mb-6">
                  {IconComponent && <IconComponent className="text-3xl mr-3 text-neon-purple" />}
                  <h3 className="text-2xl font-bold text-white tracking-wide">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      color={skill.color} 
                    />
                  ))}
                </div>
              </GlassCard>
            </MotionDiv>
          );
        })}
      </MotionDiv>
    </div>
  );
};

export default Skills;