import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NeonGradient from './components/NeonGradient';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Manikumar Kundena | Full-Stack Explorer & UI/UX',
  description: 'B.Tech student portfolio featuring Next.js, TailwindCSS, and a cinematic neon-glassmorphism design.',
  keywords: [
    'Next.js',
    'TailwindCSS',
    'Framer Motion',
    'Portfolio',
    'Manikumar Kundena',
    'Web Developer'
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans min-h-screen relative bg-background-dark text-gray-100 overflow-x-hidden">
        
        {/* 🔥 FULLSCREEN Animated Background */}
        <NeonGradient />

        {/* 🔥 Website Content Above Glow */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20 lg:pt-24">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
