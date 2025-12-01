import React from 'react';
import GlassCard from '../../components/GlassCard';
import { getCertificationsData } from '../../lib/data';
import { FaCertificate } from 'react-icons/fa';
// REMOVED: import { motion } from 'framer-motion';
// NEW: Import the wrapper components
import { MotionUl, MotionLi } from '../../components/MotionWrappers'; 

const Certifications = async () => { // Async function = Server Component
  const certifications = await getCertificationsData();

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-neon-cyan text-neon-glow-cyan">
        Certifications
      </h2>

      <GlassCard className="p-8">
        <MotionUl // <-- SUBSTITUTED <motion.ul>
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {certifications.map((cert, index) => (
            <MotionLi // <-- SUBSTITUTED <motion.li>
              key={index} 
              variants={itemVariants}
              className="flex items-start border-b border-gray-700/50 pb-4 last:border-b-0 last:pb-0"
            >
              <FaCertificate className="text-neon-purple text-2xl mr-4 mt-1 flex-shrink-0 shadow-neon-purple" />
              <div>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-white hover:text-neon-cyan transition duration-300"
                >
                  {cert.title}
                </a>
                <p className="text-gray-400">
                  <span className="font-mono">{cert.issuer}</span> &bull; {cert.date}
                </p>
              </div>
            </MotionLi>
          ))}
        </MotionUl>
      </GlassCard>
    </div>
  );
};

export default Certifications;