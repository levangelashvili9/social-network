import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-light": "#F0F2F5",
        "bg-dark": "#1C1E21",
        "main-light": "#fff",
        "main-dark": "#242526",
        "secondary-light": "#E4E6EB",
        "secondary-dark": "#3A3B3C",
        "third-light": "#D8DADF",
        "third-dark": "#4D4E4F",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
