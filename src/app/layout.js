import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata = {
  title: "Manikumar Kundena | Portfolio",
  description: "Neon Developer Portfolio with animations and futuristic effects.",

  // ⭐ OpenGraph OG Image (For WhatsApp, LinkedIn, Twitter)
  openGraph: {
    title: "Manikumar Kundena | Portfolio",
    description: "A futuristic neon-themed portfolio built with Next.js.",
    url: "https://manikumarkundena.me",
    siteName: "Manikumar Kundena",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Manikumar Kundena Portfolio Banner",
      },
    ],
  },

  // ⭐ Twitter Card Preview
  twitter: {
    card: "summary_large_image",
    title: "Manikumar Kundena | Portfolio",
    description: "A futuristic neon-themed portfolio built with Next.js.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans min-h-screen relative bg-background-dark text-gray-100 overflow-x-hidden">

        {/* ⭐ GLOBAL NEON BACKGROUND LAYERS */}
        <div className="neon-bg-root">
          <div className="bg-grid-clean"></div>       {/* main clean grid */}
          <div className="colored-grid-bg"></div>     {/* colored grid (optional) */}
          <div className="neon-bg-aurora"></div>      {/* aurora blur */}
          <div className="neon-bg-grid"></div>        {/* tech grid */}
          <div className="neon-bg-beams"></div>       {/* light beams */}

          {/* Floating global particles */}
          <div className="global-particles">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className="global-particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.4}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ⭐ MAIN CONTENT ABOVE EFFECTS */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20 lg:pt-24">{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
