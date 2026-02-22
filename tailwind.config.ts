import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "linear-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      colors: {
        // Light mode colors
        light: {
          bg: "#ffffff",
          surface: "#f3f4f6",
          border: "#e5e7eb",
        },
        // Dark mode colors (already using Tailwind defaults)
      },
    },
  },
  plugins: [],
};

export default config;
