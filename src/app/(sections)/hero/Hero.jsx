import React from 'react';
// REMOVED: import { motion } from 'framer-motion'; 

import { FaDownload, FaArrowRight } from 'react-icons/fa';
import AnimatedText from '../../components/AnimatedText';
import GlassCard from '../../components/GlassCard';
import { getPersonalData } from '../../lib/data';
import Image from 'next/image';
// NEW: Import the motion wrappers from a client file
import { MotionDiv, MotionP, MotionH1 } from '../../components/MotionWrappers'; 

const Hero = async () => {
  // This function is async (Server Component)
  const data = await getPersonalData();

  return (
    <div className="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="lg:w-3/5 z-10 text-center lg:text-left">
          
          <MotionP // Replaced <motion.p>
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-3 font-mono"
          >
            Hello, I&apos;m
          </MotionP>
          
          {/* Big Neon Name */}
          <MotionH1 // Replaced <motion.h1>
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white uppercase tracking-tighter"
          >
            <span className="text-neon-cyan text-neon-glow-cyan">Manikumar</span>{' '}
            <span className="text-neon-purple text-neon-glow-purple">Kundena</span>
          </MotionH1>
          
          {/* Animated Hero Text (AnimatedText component is already 'use client') */}
          <div className="text-2xl md:text-4xl font-bold mb-8 text-gray-200 h-10 md:h-12 overflow-hidden">
            <AnimatedText text={data.title} className="inline-block" />
          </div>

          <MotionP // Replaced <motion.p>
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-w-xl text-gray-300 mb-10 text-lg"
          >
            {data.tagline}
          </MotionP>

          {/* CTAs */}
          <MotionDiv // Replaced <motion.div>
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-neon-purple hover:bg-opacity-80 text-white font-semibold rounded-xl transition duration-300 shadow-neon-purple flex items-center justify-center gap-2 border border-transparent hover:border-white/50"
            >
              Get In Touch <FaArrowRight />
            </a>
            <a 
              href="/Manikumar-CV.pdf" // Placeholder CV path
              download
              className="px-8 py-3 glassmorphism text-neon-cyan font-semibold rounded-xl transition duration-300 hover:bg-white/10 flex items-center justify-center gap-2 border border-neon-cyan/50"
            >
              Download CV <FaDownload />
            </a>
          </MotionDiv>
        </div>

        {/* Podium Photo / Glass Card Image */}
        <MotionDiv // Replaced <motion.div>
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
            className="lg:w-2/5 mt-12 lg:mt-0"
        >
            <GlassCard className="p-4 relative max-w-sm mx-auto shadow-neon-cyan/50">
                <Image 
                    src="/images/clean-headshot.png" 
                    alt="Manikumar Kundena - Clean Headshot Photo"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                />
            </GlassCard>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Hero;