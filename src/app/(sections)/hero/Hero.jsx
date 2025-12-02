import React from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import AnimatedText from "../../components/AnimatedText";
import { getPersonalData } from "../../lib/data";
import Image from "next/image";
import { MotionDiv, MotionP, MotionH1 } from "../../components/MotionWrappers";

const particles = [
  { top: "10%", left: "18%" },
  { top: "22%", left: "80%" },
  { top: "35%", left: "12%" },
  { top: "50%", left: "88%" },
  { top: "68%", left: "20%" },
  { top: "78%", left: "72%" },
  { top: "15%", left: "60%" },
  { top: "42%", left: "40%" },
];

const Hero = async () => {
  const data = await getPersonalData();

  return (
    <div className="relative pt-20 pb-32 overflow-hidden">
      
      {/* 🔥 Ambient Neon Background Layer */}
      <div className="hero-ambient"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

        {/* LEFT — TEXT SIDE */}
        <div className="lg:w-3/5 z-10 text-center lg:text-left">
          
          <MotionP
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-3 font-mono"
          >
            Hello, I&apos;m
          </MotionP>

          {/* 🔥 Neon Title */}
          <MotionH1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl neon-title"
          >
            <span className="neon neon-cyan block">Manikumar</span>
            <span className="neon neon-purple block">Kundena</span>
          </MotionH1>

          {/* Animated Subtitle */}
          <div className="text-2xl md:text-4xl neon neon-white font-semibold mt-2">
            <AnimatedText text={data.title} className="inline-block" />
          </div>

          {/* Tagline */}
          <MotionP
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="max-w-xl text-gray-300 mb-10 text-lg mx-auto lg:mx-0"
          >
            {data.tagline}
          </MotionP>

          {/* CTA Buttons */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="neon-btn neon-btn-primary">
              Get In Touch <FaArrowRight />
            </a>

            <a
              href="/Manikumar-CV.pdf"
              download
              className="neon-btn neon-btn-outline"
            >
              Download CV <FaDownload />
            </a>
          </MotionDiv>
        </div>

        {/* RIGHT — ULTRA FX PHOTO */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.9, type: "spring" }}
          className="lg:w-2/5 flex justify-center"
        >
          <div className="hero-photo-wrapper group">

            {/* Neon halo */}
            <div className="hero-halo" />

            {/* Animated cyber grid */}
            <div className="hero-grid" />

            {/* Floating particles */}
            <div className="hero-particles">
              {particles.map((p, i) => (
                <span
                  key={i}
                  className="hero-particle"
                  style={{ top: p.top, left: p.left, animationDelay: `${i * 0.4}s` }}
                />
              ))}
            </div>

            {/* Energy orbs */}
            <span className="hero-orb hero-orb-1" />
            <span className="hero-orb hero-orb-2" />

            {/* Floating image */}
            <MotionDiv
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hero-photo-inner"
            >
              <Image
                src="/images/clean-headshot.png"
                alt="Manikumar Kundena"
                fill
                priority
                className="object-cover rounded-2xl"
              />

              {/* Hologram scanlines */}
              <div className="hero-scanlines" />

              {/* Glitch pulse */}
              <div className="hero-glitch" />

              {/* Shine sweep */}
              <div className="hero-shine" />
            </MotionDiv>

          </div>
        </MotionDiv>

      </div>
    </div>
  );
};

export default Hero;
