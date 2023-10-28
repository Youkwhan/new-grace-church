/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F9F8F6",
        "gray-50": "#E8E6EF",
        "gray-100": "#B2AAC0",
        "gray-500": "#1C0D47",
        "primary-100": "#C0E2F3",
        "primary-300": "#6BA3D4",
        "primary-500": "#007ACC",
        "secondary-400": "#0E2837",
        "secondary-500": "#65AEDD",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        gracetext: "url('/GraceText1.svg')",
        gracetext2: "url('/GraceText2.svg')",
        logo: "url('/logo.svg')",
        corner: "url('./assets/Corner.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1260px",
    },
  },
  plugins: [],
};
