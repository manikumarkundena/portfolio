'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <GlassCard className="max-w-6xl mx-auto py-3 px-6 flex justify-between items-center">
        {/* Neon Name/Logo */}
        <Link href="#hero" className="text-2xl font-black font-mono tracking-wider text-neon-cyan transition duration-300 hover:text-white text-neon-glow-cyan">
          M.K.
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-gray-300 hover:text-neon-purple transition duration-300 relative group"
            >
              {item.name}
              {/* Underline hover effect */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile/Menu (Can be expanded but kept simple for core components) */}
        <div className="md:hidden">
          {/* Placeholder for a mobile menu icon */}
          <span className="text-xl">☰</span>
        </div>
      </GlassCard>
    </motion.header>
  );
};

export default Navbar;