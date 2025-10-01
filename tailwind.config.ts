import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tai: ["var(--font-tai-heritage)", "serif"],
        playfair: ["var(--font-playfair-sc)", "serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)"],
        lexend: ["var(--font-lexend-exa)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        "1.6": "6px",
        "1.5": "6.5px",
        "2.5-5.5": "9px 22px",
        "2.5": "9px",
        "5.5": "22px",
        "5": "20px",
      },
      margin: {
        "2.5": "9px",
        "5.5": "22px",
      },
      colors: {
        primary: "#DD5903",
        second: "#111111",
        third: "#6E777D",
        fourth: "#30343B",
        grey: "#292929",
        fifth: "#1F1F1F",
        blue: "#001142",
        blueSecondary: "#0365FA",
        seventh: "##30343B",
      },
      textColor: {
        primary: "#DD5903",
        second: "#111111",
        third: "#6E777D",
        fourth: "#30343B",
        grey: "#292929",
        fifth: "#1F1F1F",
        red: "#FF0000",
        seventh: "#30343B",
        green: "#02c025",
        blue: "#001142",
        blueSecondary: "#0365FA",
      },
      backgroundColor: {
        primary: "#DD5903",
        secondary: "#0365FA",
        third: "#F5F5F5",
        fourth: "#F3F4F6",
        fifth: "#1F1F1F",
        sixth: "#F7F7F7",
        seventh: "#FEECDC",
        eighth: `#E5E7EB`,
        ninth: `#111928`,
        tenth: "#02c025",
      },
      borderColor: {
        primary: "#DD5903",
        second: "#E5E7EB",
        third: "#6B7280",
        fourth: "#D1D5DB",
        secondary: "#0365FA",
      },
      fontSize: {
        md: "16px",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
export default config;
