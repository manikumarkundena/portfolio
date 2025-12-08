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
    <section
      id="home"
      className="relative pt-16 pb-28 md:pt-24 md:pb-40 overflow-hidden"
    >
       <div className="hero-nebula">
    <div className="nebula-cyan"></div>
    <div className="nebula-purple"></div>
  </div>
      {/* Soft hero-only gradient in the background */}
      <div
        className="
          pointer-events-none 
          absolute -inset-x-40 -top-40 h-[420px]
          opacity-70
          bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_88%_80%,rgba(168,85,247,0.28),transparent_60%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
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

          <MotionH1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className="block text-neon-cyan">MANIKUMAR</span>
            <span className="block text-neon-purple">KUNDENA</span>
          </MotionH1>

          <div className="text-2xl md:text-4xl font-semibold mb-6 text-gray-100">
            <AnimatedText text={data.title} className="inline-block" />
          </div>

          <MotionP
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="max-w-xl text-gray-300 mb-10 text-lg mx-auto lg:mx-0"
          >
            {data.tagline}
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="neon-btn neon-btn-primary"
            >
              Get In Touch <FaArrowRight />
            </a>

            <a
  href="https://drive.google.com/uc?export=download&id=1H_2hDH5Qy124Q2ikroX3i1B4tbaJz3bi"
  target="_blank"
  rel="noopener noreferrer"
  className="neon-btn neon-btn-outline"
>
  Download CV <FaDownload />
</a>

          </MotionDiv>
        </div>

        {/* RIGHT — PHOTO WITH FX */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.9, type: "spring" }}
          className="lg:w-2/5 flex justify-center z-10"
        >
          <div className="hero-photo-wrapper group">
            {/* Subtle gradient behind photo */}
            <div className="hero-halo" />

            {/* Animated grid overlay */}
            <div className="hero-grid" />

            {/* Floating particles */}
            <div className="hero-particles">
              {particles.map((p, i) => (
                <span
                  key={i}
                  className="hero-particle"
                  style={{
                    top: p.top,
                    left: p.left,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>

            {/* Glowing orbs */}
            <span className="hero-orb hero-orb-1" />
            <span className="hero-orb hero-orb-2" />

            {/* Floating photo itself */}
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

              {/* Scanlines + tiny glitch, but NO blur filter on whole card */}
              <div className="hero-scanlines" />
              <div className="hero-glitch" />
              <div className="hero-shine" />
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
