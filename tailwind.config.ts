import type { Config } from "tailwindcss";
import { tokens } from "./styles/tokens";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: tokens.colors.base,
        surface: tokens.colors.surface,
        accent: tokens.colors.accent,
        text: tokens.colors.text,
        border: tokens.colors.border,
        status: tokens.colors.status,
      },
      fontFamily: {
        display: tokens.typography.fontFamily.display,
        body: tokens.typography.fontFamily.body,
      },
      animation: {
        reveal: 'reveal 0.7s ease-out forwards',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
