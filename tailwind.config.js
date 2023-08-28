/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        // Custom dashboard layout
        dashboard: "280px 1fr",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      colors: {
        primary: "#fffed4",
        white: "#ffffff",
        black: "#000000",
        halfdark: "#402e43",
        reddish: "#d53631",
        brownish: "#e9a772",
      },
      boxShadow: {
        dashboard: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      },
    },
  },
  plugins: [],
};
