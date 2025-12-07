"use client";

import { MotionDiv } from "../components/MotionWrappers";
import { FaArrowRight } from "react-icons/fa";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Ambient Nebula Glow */}
      <div className="absolute w-[600px] h-[600px] bg-neon-cyan/30 blur-[140px] rounded-full -top-32 -left-20 animate-pulse-slow" />
      <div className="absolute w-[550px] h-[550px] bg-neon-purple/40 blur-[160px] rounded-full -bottom-20 -right-10 animate-pulse-slow" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full blur-sm animate-ping-slow"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <MotionDiv
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-neon-cyan text-neon-glow-cyan mb-6">
          Message Sent 🚀
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
         I’ll check your message and get back to you soon.
Until then… take a moment, relax, and keep growing 🔥
        </p>

        <a
          href="/"
          className="px-8 py-3 bg-neon-purple text-white font-semibold rounded-xl shadow-neon-purple hover:scale-105 transition duration-300 inline-flex items-center gap-2"
        >
          Back to Home <FaArrowRight />
        </a>
      </MotionDiv>
    </div>
  );
}
