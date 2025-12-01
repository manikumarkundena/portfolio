'use client';
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Base Glassmorphism Card Component
 * Applies the translucent background, blur, and required glass border.
 */
const GlassCard = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`glassmorphism ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;