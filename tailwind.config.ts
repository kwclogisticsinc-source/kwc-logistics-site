import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#061A3A",
        muted: "#516174",
        line: "#D5E4F5",
        brand: {
          blue: "#087CFF",
          cyan: "#12B7FF",
          canada: "#087CFF",
          navy: "#061A3A",
          charcoal: "#08234F",
          pale: "#F1F7FF"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(6, 26, 58, 0.10)",
        glow: "0 24px 80px rgba(8, 124, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
