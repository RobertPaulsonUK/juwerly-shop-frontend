import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "1rem",
        },
        screens: {
          xl: "1200px",
          lg: "1024px",
          md: "768px",
          sm: "575px",
        },
      },
      colors: {
        white : "#FFF",
        lightGray : "#d4d4d8",
        gray : "#3F3F46",
        blue : "#006FEE",
      },
    },
  },
  plugins: [],
} satisfies Config;
