"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AnimatedAvatar() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D tilt transforms
  const rotateX = useTransform(y, [-80, 80], [20, -20]);
  const rotateY = useTransform(x, [-80, 80], [-20, 20]);

  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center"
      style={{ rotateX, rotateY }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ---- MATRIX CODE RAIN BACKGROUND ---- */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(0,255,255,0.15) 0px, rgba(0,255,255,0.1) 2px, transparent 3px)",
        }}
      />

      {/* ---- NEON HALO ---- */}
      <motion.div
        className="absolute w-[130%] h-[130%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,0.35), transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* ---- ROTATING PARTICLES ---- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-6 left-12 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff]" />
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]" />
        <div className="absolute top-20 right-6 w-1.5 h-1.5 bg-cyan-300 rounded-full" />
        <div className="absolute bottom-14 left-8 w-1.5 h-1.5 bg-purple-300 rounded-full" />
      </motion.div>

      {/* ---- SPARKS AROUND HOODIE ---- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="absolute bottom-14 left-24 w-1 h-6 bg-cyan-400 blur-sm opacity-70 rotate-12" />
        <div className="absolute bottom-12 right-20 w-1 h-6 bg-purple-400 blur-sm opacity-70 -rotate-12" />
      </motion.div>

      {/* ---- SUBTLE HOLOGRAM SCAN ---- */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        animate={{ opacity: [0.1, 0.2, 0.1], y: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 3px)",
        }}
      />

      {/* ---- GLITCH ON HOVER ---- */}
      {hover && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0, 0.5, 0], x: [-4, 4, -4] }}
          transition={{ duration: 0.25, repeat: 1 }}
          style={{
            background:
              "url(/images/avatar.svg) no-repeat center/contain",
            filter: "hue-rotate(40deg) brightness(1.8)",
          }}
        />
      )}

      {/* ---- BLINKING EYES ---- */}
      {hover && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.1 }}
          style={{
            background:
              "url(/images/avatar.svg) no-repeat center/contain",
          }}
        />
      )}

      {/* ---- MAIN AVATAR ---- */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full"
      >
        <Image
          src="/images/avatar.svg"
          alt="avatar"
          fill
          priority
          className="object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]"
        />
      </motion.div>
    </motion.div>
  );
}
