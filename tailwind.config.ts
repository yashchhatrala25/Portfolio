import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)'
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': "move-left 30s linear infinite",
        'move-right': "move-right 30s linear infinite",
        'hand-move': "hand-move 2s linear infinite",
        'arrow-down':"arrow-down 2s linear infinite",
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'move-left': {
          '0%': {
            transform: "translateX(0%)"
          },
          '100%': {
            transform: "translateX(-50%)"
          }
        },
        'move-right': {
          '0%': {
            transform: "translateX(-50%)"
          },
          '100%': {
            transform: "translateX(0%)"
          }
        },
        'hand-move': {
          '0%': {
            transform: 'rotate(-10deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(30deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(-10deg) scale(1)',
          },
        },

        'arrow-down': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(30%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
