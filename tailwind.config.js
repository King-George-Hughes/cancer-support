/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "sans-serif"],
      poppins: ['"Poppins"', "serif"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        cardColor_1: "#CAE4F7",
        cardColor_2: "#FDF0DD",
        cardColor_3: "#D2F4F4",
        cardColor_4: "#E0EAFD",
        bgColor: "#EEF4F8",
      },
    },
  },
  plugins: [],
};
