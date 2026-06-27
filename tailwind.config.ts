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
          blue: "#1f5eff",
          cyan: "#12b7ff",
          navy: "#0b1f38",
          pale: "#eef5ff"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 31, 56, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
