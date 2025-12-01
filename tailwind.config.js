/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{json}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#0a0f1f",
        "neon-cyan": "#00f6ff",
        "neon-purple": "#a37cff",
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00f6ff, 0 0 20px #00f6ff",
        "neon-purple": "0 0 10px #a37cff, 0 0 20px #a37cff",
      },
    },
  },
  plugins: [],
};
