/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: "#131319",
        bg2: "#20202a",
        success: "#0bd217",
        danger: "#e62975",
      },
      fontFamily: {
        nanum: ["Nanum Gothic"],
        outfit: ["Outfit"],
      },
    },
  },
  plugins: [],
};
