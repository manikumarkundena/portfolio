import React from 'react';
import GlassCard from '../../components/GlassCard';
import { getPersonalData } from '../../lib/data';
import { MotionDiv, MotionP } from '../../components/MotionWrappers';
import AnimatedAvatar from '../../components/AnimatedAvatar';

const About = async () => {
  const data = await getPersonalData();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" }
    },
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold 
                     text-center mb-12 text-neon-purple text-neon-glow-purple">
        About Me
      </h2>

      <GlassCard className="p-8 lg:p-12 max-w-5xl mx-auto 
                            flex flex-col lg:flex-row gap-10">

        {/* Avatar */}
        <MotionDiv variants={itemVariants} className="lg:w-1/3 flex justify-center">
          <AnimatedAvatar />
        </MotionDiv>

        {/* Bio */}
        <MotionDiv variants={itemVariants} className="lg:w-2/3">
          <h3 className="text-3xl font-bold mb-4 text-neon-cyan font-mono">
            {data.name}
          </h3>

          <p className="text-xl font-medium mb-6 text-gray-300 border-l-4 border-neon-purple pl-4">
            {data.title}
          </p>

          <MotionP variants={itemVariants} className="mb-6 text-gray-200 leading-relaxed">
            {data.bio}
          </MotionP>

          {/* Divider */}
          <div className="w-full h-[2px] bg-gradient-to-r 
                          from-transparent via-neon-purple to-transparent 
                          opacity-70 my-6"></div>

          {/* Key Details */}
          <MotionDiv variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-3 text-neon-purple">Key Details</h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">

              <li className="p-3 rounded-lg bg-gray-900/40 border border-neon-cyan/40 
                             hover:border-neon-cyan hover:shadow-neon-cyan 
                             transition-all duration-300 hover:-translate-y-1">
                <b>Status:</b> B.Tech Student (2024–2028)
              </li>

              <li className="p-3 rounded-lg bg-gray-900/40 border border-neon-purple/40 
                             hover:border-neon-purple hover:shadow-neon-purple 
                             transition-all duration-300 hover:-translate-y-1">
                <b>Location:</b> Tumakuru, Karnataka
              </li>

              <li className="p-3 rounded-lg bg-gray-900/40 border border-neon-cyan/40 
                             hover:border-neon-cyan hover:shadow-neon-cyan 
                             transition-all duration-300 hover:-translate-y-1">
                <b>Focus:</b> Full-Stack • Gen-AI • Data Science
              </li>

              <li className="p-3 rounded-lg bg-gray-900/40 border border-neon-purple/40 
                             hover:border-neon-purple hover:shadow-neon-purple 
                             transition-all duration-300 hover:-translate-y-1">
                <b>Mindset:</b> Practical • Curious • Introvert
              </li>

            </ul>
          </MotionDiv>
        </MotionDiv>

      </GlassCard>
    </MotionDiv>
  );
};

export default About;
