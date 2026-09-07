/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#00A896",
        navy: "#0A192F",
        cyan: "#00C49F",
        ice: "#F0F8FF",
        amber: "#FFB703",
        "slate-dark": "#1E293B",
        /* Legacy aliases */
        brand: {
          primary: "#0A192F",
          secondary: "#00A896",
          medium: "#00C49F",
          light: "#6B85A3",
        },
        charcoal: {
          deep: "#1E293B",
          primary: "#383838",
        },
        neutral: {
          medium: "#686868",
          light: "#D9D9D9",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
