'use client';

import React from "react";
import { motion } from "framer-motion";

/**
 * Static Tailwind-safe color maps
 */
const COLOR_MAP = {
  cyan: {
    bar: "bg-cyan-400",
    text: "text-cyan-300",
    glow: "shadow-[0_0_10px_#00f6ff,0_0_20px_#00f6ff]",
  },
  purple: {
    bar: "bg-purple-400",
    text: "text-purple-300",
    glow: "shadow-[0_0_10px_#a37cff,0_0_20px_#a37cff]",
  },
  blue: {
    bar: "bg-blue-400",
    text: "text-blue-300",
    glow: "shadow-[0_0_10px_#60a5fa,0_0_20px_#60a5fa]",
  },
};

/**
 * Animated skill bar with neon glow.
 */
export default function SkillBar({ name, level, color = "cyan" }) {
  const scheme = COLOR_MAP[color] || COLOR_MAP.cyan;

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className={`text-sm font-mono ${scheme.text}`}>{level}%</span>
      </div>

      <div className="w-full bg-gray-800/60 rounded-full h-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-3 rounded-full ${scheme.bar} ${scheme.glow}`}
        />
      </div>
    </div>
  );
}
