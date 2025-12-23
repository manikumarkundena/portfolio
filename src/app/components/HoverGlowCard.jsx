'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  FaPalette,
  FaWpforms,
  FaShoppingCart,
  FaRobot,
  FaChartLine,
  FaGlobe,
  FaRocket
} from "react-icons/fa";

const iconMap = {
  FaPalette,
  FaWpforms,
  FaShoppingCart,
  FaRobot,
  FaChartLine,
  FaGlobe,
  FaRocket
};

const HoverGlowCard = ({ project }) => {
  const Icon = iconMap[project.icon];

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="relative block"
    >
      {/* Shine sweep */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-700 blur-xl"></div>

      <GlassCard
        className="relative p-5 flex flex-col h-full overflow-hidden group 
        transition duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]
        hover:border-cyan-300/40 rounded-2xl"
      >

        {/* Micro Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              }}
            ></span>
          ))}
        </div>

        {/* Icon Box */}
        <div className="relative flex items-center justify-center h-40 w-full mb-4 
                        bg-black/20 rounded-lg border border-cyan-300/10">
          <div className="text-6xl text-neon-cyan transition duration-300 
                        group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgb(0,255,255)]">
            {Icon && <Icon />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-neon-purple drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
          {project.title}
        </h3>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mb-3"></div>

        {/* Description */}
        <p className="text-sm text-gray-300 flex-grow mb-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.stack.map((item, index) => (
            <span
              key={index}
              className="font-mono text-xs px-2 py-0.5 rounded-full 
              bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-700/50">
          <span
            className={`text-sm font-medium ${
              project.status === "In Progress" ? "text-yellow-400" : "text-green-400"
            }`}
          >
            {project.status}
          </span>
          <FaExternalLinkAlt className="text-cyan-300 group-hover:scale-110 transition" />
        </div>
      </GlassCard>
    </motion.a>
  );
};

export default HoverGlowCard;
