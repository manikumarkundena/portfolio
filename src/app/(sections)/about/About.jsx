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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl neon-title neon-purple text-center mb-10">
  About Me
</h2>


      <GlassCard className="p-8 lg:p-12 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">

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

          <MotionP variants={itemVariants} className="mb-4 text-gray-200 leading-relaxed">
            {data.bio}
          </MotionP>

          <MotionDiv variants={itemVariants} className="mt-6 pt-4 border-t border-gray-700/50">
            <h4 className="text-lg font-semibold mb-2 text-neon-purple">Key Details</h4>
            <ul className="list-disc list-inside text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li><b>Status:</b> B.Tech Student (2024–2028)</li>
              <li><b>Location:</b> Tumakuru, Karnataka, India</li>
              <li><b>Focus:</b> Web Development (Next.js), Android/Kotlin</li>
              <li><b>Mindset:</b> Introvert & Practical Learner</li>
            </ul>
          </MotionDiv>
        </MotionDiv>

      </GlassCard>
    </MotionDiv>
  );
};

export default About;
