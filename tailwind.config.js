/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C1B17",
        cream: "#FAF8F3",
        sage: {
          DEFAULT: "#7C8371",
          50: "#F3F4F0",
          100: "#E4E6DD",
          200: "#C7CBBB",
          400: "#96A085",
          DEEP: "#454B3C",
        },
        blush: {
          DEFAULT: "#D2A898",
          light: "#E8CCC0",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Jost", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
