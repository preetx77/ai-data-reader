import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 1px 0 0 rgba(255,255,255,0.04), 0 8px 30px rgba(0,0,0,0.35)",
      },
      colors: {
        panel: {
          light: "#ffffff",
          dark: "#0b1220",
        },
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

export default config;
