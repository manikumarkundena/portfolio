'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// 📝 1. Text that will "type out"
const ABOUT_TEXT = `
I'm Manikumar, an introverted and practical B.Tech student (2024–2028) at SIT, 
currently exploring web development, Next.js, TailwindCSS, Android/Kotlin and 
data concepts. I enjoy learning by doing and building clean, modern projects 
that actually work in the real world.
`;

export default function AboutAvatarTyping() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  // ⌨️ 2. Simple typewriter effect for the paragraph
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(ABOUT_TEXT.slice(0, i));
      i++;
      if (i > ABOUT_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18); // typing speed (ms per character)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto glassmorphism border border-white/10 rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
        {/* Soft background glow inside the card */}
        <div className="pointer-events-none absolute -top-40 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 text-white drop-shadow-[0_0_18px_rgba(56,189,248,0.6)]"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[260px,1fr] gap-10 items-center">
          {/* 🧑‍💻 3. Animated Avatar Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Outer glowing ring */}
            <motion.div
              animate={{ rotate: [0, 6, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-56 h-56 rounded-full border-2 border-cyan-400/70 shadow-[0_0_30px_rgba(34,211,238,0.8)] flex items-center justify-center"
            >
              {/* Inner gradient circle with initials */}
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <span className="text-4xl font-black tracking-wide text-cyan-300">
                  M K
                </span>
              </div>
            </motion.div>

            {/* Tiny floating code icons */}
            <motion.div
              className="absolute -top-2 right-2 text-sm px-2 py-1 rounded-full bg-purple-500/20 border border-purple-400/60 backdrop-blur shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-mono text-xs text-purple-100">{'< />'}</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-4 text-xs px-2 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/60 backdrop-blur shadow-lg"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <span className="font-mono text-[10px] text-cyan-100">next dev</span>
            </motion.div>

            {/* "Typing…" label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-600/70 text-[11px] font-mono text-slate-200 flex items-center gap-1"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              typing about me…
            </motion.div>
          </motion.div>

          {/* 📝 4. Typing About Text */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-4 text-[15px] md:text-base leading-relaxed text-slate-200"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-2">
              Manikumar Kundena
            </h3>
            <p className="text-sm md:text-base text-slate-300 mb-1">
              B.Tech Student & Web Dev Explorer
            </p>

            <p className="whitespace-pre-line font-normal text-slate-200 min-h-[120px]">
              {displayed}
              {/* blinking cursor */}
              {!done && <span className="inline-block w-[8px] bg-cyan-300 ml-[1px] animate-pulse rounded-sm" />}
            </p>

            {/* Quick bullets */}
            <div className="grid sm:grid-cols-2 gap-3 mt-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-slate-100 mb-1">Focus</p>
                <p>Next.js, TailwindCSS, Android/Kotlin, C & basic data concepts.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">Current Goal</p>
                <p>Build clean, practical projects + get into solid dev internships.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
