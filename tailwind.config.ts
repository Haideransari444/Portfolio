import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: "#F4FBF8",
          100: "#EAF7F1",
          200: "#D6EFE5",
          300: "#B8F2D0",
          400: "#A8E6CF",
          500: "#7DDCB5",
          900: "#1F3D36"
        },
        ink: {
          700: "#25443D",
          900: "#1F3D36"
        },
        muted: "#5F7C73",
        peach: "#FFD6BA",
        lavender: "#D8CCFF",
        sky: "#C7E9FF",
        butter: "#FFF3B0"
      },
      boxShadow: {
        soft: "9px 9px 18px rgba(111, 168, 148, 0.18), -8px -8px 18px rgba(255, 255, 255, 0.92)",
        insetSoft: "inset 6px 6px 12px rgba(111, 168, 148, 0.14), inset -6px -6px 12px rgba(255, 255, 255, 0.86)"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
