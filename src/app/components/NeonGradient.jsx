"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "12%", left: "18%" },
  { top: "24%", left: "72%" },
  { top: "40%", left: "30%" },
  { top: "58%", left: "82%" },
  { top: "68%", left: "18%" },
  { top: "78%", left: "55%" },
  { top: "20%", left: "50%" },
  { top: "35%", left: "88%" },
  { top: "52%", left: "12%" },
  { top: "84%", left: "40%" },
  { top: "15%", left: "90%" },
  { top: "8%", left: "40%" },
];

export default function NeonGradient() {
  return (
    <div className="neon-bg-root">
      {/* Aurora waves (liquid neon) */}
      <div className="neon-bg-layer bg-aurora-waves" />

      {/* Tech grid overlay */}
      <div className="neon-bg-layer bg-grid-lines" />

      {/* Light beams */}
      <div className="neon-bg-layer bg-light-beams" />

      {/* Soft noise / film grain */}
      <div className="neon-bg-layer bg-noise-soft" />

      {/* Floating particles (animated with framer-motion) */}
      <motion.div className="neon-bg-layer" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="particle-dot"
            style={{ top: p.top, left: p.left }}
            animate={{
              y: [-12, 8, -12],
              opacity: [0.2, 0.9, 0.3],
            }}
            transition={{
              duration: 7 + i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
