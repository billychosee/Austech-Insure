import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGray: '#343332',
        mediumGray: '#686764',
        mediumGreen: '#CBE87D',
      },
      boxShadow: {
        'custom-lg': '0 10px 15px rgba(104, 103, 100, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
