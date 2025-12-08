'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./GlassCard";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  FiHome,
  FiUser,
  FiLayers,
  FiFolder,
  FiMail
} from "react-icons/fi";

// NAV ITEMS + Icons
const navItems = [
  { name: "Home", href: "#hero", icon: <FiHome /> },
  { name: "About", href: "#about", icon: <FiUser /> },
  { name: "Skills", href: "#skills", icon: <FiLayers /> },
  { name: "Projects", href: "#projects", icon: <FiFolder /> },
  { name: "Contact", href: "#contact", icon: <FiMail /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 p-4"
      >
        <GlassCard className="max-w-6xl mx-auto py-3 px-6 flex justify-between items-center">
          
          {/* BRAND */}
          <Link
            href="#hero"
            className="text-2xl font-black font-mono tracking-wider text-neon-cyan hover:text-white transition"
          >
            Manikumar
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-purple transition relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-3 rounded-full bg-[#0f172a]/70 backdrop-blur-md border border-cyan-400/30 text-neon-cyan shadow-lg hover:scale-105 transition"
          >
            <FiMenu size={22} />
          </button>

        </GlassCard>
      </motion.header>

      {/* MOBILE RADIAL MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="radial-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
              className="absolute bottom-20 right-6 bg-white/5 border border-cyan-300/40
                         backdrop-blur-xl p-6 rounded-3xl shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-5">

                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-neon-cyan text-lg font-semibold hover:text-white transition"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: index * 0.07 }}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {item.name}
                  </motion.a>
                ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
