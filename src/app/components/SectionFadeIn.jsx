// src/app/components/SectionFadeIn.jsx
'use client'; // <-- MUST BE HERE

import { motion } from 'framer-motion';

const SectionFadeIn = ({ id, children }) => (
  <motion.section
    id={id}
    className="py-16 md:py-24 px-4 lg:px-8 max-w-7xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

export default SectionFadeIn;