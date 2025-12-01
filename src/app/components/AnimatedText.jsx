'use client';

import React from 'react';
import { motion } from 'framer-motion';

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/**
 * Animates text word-by-word.
 */
const AnimatedText = ({ text, className = '' }) => {
  const words = text.split(' ');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05 }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-nowrap mr-2"
          variants={defaultAnimations}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;