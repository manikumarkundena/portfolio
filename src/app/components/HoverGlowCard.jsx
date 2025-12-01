'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Project Card with a pronounced neon hover glow effect.
 */
const HoverGlowCard = ({ project }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <GlassCard 
        className="p-4 flex flex-col h-full transition duration-300 hover:shadow-neon-cyan hover:border-neon-cyan/50"
      >
        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
          {/* Placeholder for real image, must be placed in /public/images */}
          <Image
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition duration-500 group-hover:scale-110"
          />
        </div>
        
        <h3 className={`text-xl font-bold mb-2 text-neon-purple`}>{project.title}</h3>
        <p className="text-sm text-gray-300 flex-grow mb-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.stack.map((item, index) => (
            <span key={index} className="font-mono text-xs px-2 py-0.5 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-700/50">
          <span className={`text-sm font-medium ${project.status === 'In Progress' ? 'text-yellow-400' : 'text-green-400'}`}>
            {project.status}
          </span>
          <FaExternalLinkAlt className="text-neon-cyan group-hover:scale-110 transition" />
        </div>
      </GlassCard>
    </motion.a>
  );
};

export default HoverGlowCard;