/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#C0AAAA",
        "gray-500": "#5E0000",
        "primary-100": "#C0E2F3",
        "primary-300": "#6BA3D4",
        "primary-500": "#007ACC",
        "secondary-400": "#58C3FF",
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
        gracetext: "url('./assets/GraceText1.png')",
        gracetext2: "url('./assets/GraceText2.png')",
        logo: "url('./assets/logo.png')",
        corner: "url('./assets/Corner.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1113px",
    },
  },
  plugins: [],
};
