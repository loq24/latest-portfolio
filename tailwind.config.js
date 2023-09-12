/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "anek-bangla": ["var(--font-anek-bangla)"],
        "work-sans": ["var(--font-work-sans)"],
      },
      colors: {
        ["raisin-black"]: "#222224",
      },
      keyframes: {
        scroll: {
          "0%": { opacity: 0 },
          "10%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(15px)", opacity: 0 },
        },
      },
      animation: {
        scroll: "scroll 2.2s cubic-bezier(.15,.41,.69,.94) infinite",
      },
    },
  },
  plugins: [],
};
