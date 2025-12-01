'use client';

import React from 'react';
import { motion } from 'framer-motion';

const NeonGradient = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* Purple Glow - Top Left */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ 
          scale: [0.9, 1.15, 0.9],
          x: [0, -20, 10, 0],
          y: [0, 15, -10, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full filter blur-[120px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(124,92,255,0.8) 0%, transparent 70%)",
        }}
      />

      {/* Cyan Glow - Bottom Right */}
      <motion.div
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ 
          scale: [1.1, 0.85, 1.1],
          x: [0, 20, -15, 0],
          y: [0, -10, 10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-[650px] h-[650px] rounded-full filter blur-[140px] mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(0,246,255,0.8) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default NeonGradient;
