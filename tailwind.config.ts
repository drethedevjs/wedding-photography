import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'flex',
    'flex-col',
    'overflow-hidden',
    'items-center',
    'justify-center',
    'h-80'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        covGray: "#5a5a5a",
        skyBlue: "#4DB5F7",
        gold: "#A79B7D"
      },
    },
  },
  plugins: [],
} satisfies Config;
