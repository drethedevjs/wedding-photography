import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        covGray: "#5a5a5a",
        skyBlue: "#4DB5F7",
        gold: "#A79B7D",
        covLightGray: "#F9F9F9"
      },
      fontFamily: {
        helvetica: "var(--font-helvetica), Arial, sans-serif",
        hoefler: "var(--font-hoefler), Georgia, serif",
        geistSans: "var(--font-geist-sans), sans-serif",
        geistMono: "var(--font-geist-mono), monospace"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
} satisfies Config;
