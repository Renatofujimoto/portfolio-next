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
        josefin: ["Josefin Sans", "sans-serif"],
        roboto_mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        primary: "#262630",
        secondary: "#363636",
      },
    },
  },
  plugins: [],
};
export default config;
