import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#DC2626",
          dark: "#B91C1C"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(220,38,38,.18)"
      }
    }
  },
  plugins: []
};

export default config;
