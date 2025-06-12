import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a9eff',
        secondary: '#00e5ff',
        accent: '#ff3860',
        dark: {
          DEFAULT: '#0a1220',
          lighter: '#111a28',
          darker: '#060d16',
        },
      },
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        title: ['Orbitron', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
