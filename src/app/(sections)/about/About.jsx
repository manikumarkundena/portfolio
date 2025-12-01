import React from 'react';
import GlassCard from '../../components/GlassCard';
import { getPersonalData } from '../../lib/data';
import Image from 'next/image';
// Import the wrapper components
import { MotionDiv, MotionP } from '../../components/MotionWrappers'; 

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
    <MotionDiv // Line 25: Opening tag for the whole section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-neon-purple text-neon-glow-purple">
        About Me
      </h2>
      
      <GlassCard className="p-8 lg:p-12 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8"> {/* Line 35: Opening tag for GlassCard */}
        
        {/* Headshot Section */}
        <MotionDiv // Line 37: Opening tag for headshot animation
          variants={itemVariants} 
          className="lg:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-cyan shadow-neon-cyan/70">
            <Image
              src="/images/podium-photo.png"
              alt="Manikumar Kundena"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="object-cover"
            />
          </div>
        </MotionDiv> {/* Line 55: Closing tag for headshot animation (MotionDiv) */}
        
        {/* Bio Content */}
        <MotionDiv variants={itemVariants} className="lg:w-2/3"> {/* Line 57: Opening tag for bio content animation (MotionDiv) */}
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
              <li>**Status:** B.Tech Student (2024–2028)</li>
              <li>**Location:** Tumakuru, Karnataka, India</li>
              <li>**Focus:** Web Development (Next.js), Android/Kotlin</li>
              <li>**Mindset:** Introvert & Practical Learner</li>
            </ul>
          </MotionDiv>
        </MotionDiv> {/* Line 78: Closing tag for bio content animation (MotionDiv) */}
        
      </GlassCard> {/* Line 80: Closing tag for GlassCard */}
    </MotionDiv> /* Line 81: Closing tag for the whole section (MotionDiv) */
  );
};

export default About;