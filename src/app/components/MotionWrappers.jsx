// src/app/components/MotionWrappers.jsx
'use client';

import { motion } from 'framer-motion';

// Export motion elements wrapped in a client component file
export const MotionDiv = motion.div;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionA = motion.a;
export const MotionLi = motion.li;
export const MotionUl = motion.ul;
export const MotionSpan = motion.span;
// Now, any Server Component can import these without error.