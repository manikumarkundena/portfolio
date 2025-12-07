// src/app/components/Footer.jsx

import React from 'react';
import GlassCard from './GlassCard'; // GlassCard MUST be a Client Component ('use client')

const Footer = async () => { // Keep 'async' to treat as Server Component (which can handle async)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <GlassCard className="text-center py-6">
          <p className="text-sm text-gray-400 font-mono">
            &copy; {currentYear} Manikumar Kundena | Crafted with intent, built with clarity.
            
           
          </p>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;