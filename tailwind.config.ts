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
        ink: "#17212f",
        muted: "#5b6675",
        line: "#d9e2ec",
        brand: {
          blue: "#006DFF",
          cyan: "#29A8FF",
          canada: "#D71920",
          navy: "#06152E",
          charcoal: "#111827",
          pale: "#F5F8FC"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 31, 56, 0.08)",
        glow: "0 24px 80px rgba(0, 109, 255, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
