/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#1B1B16',
        parchment: '#F3EEE0',
        parchment2: '#E9E2CE',
        olive: '#42462F',
        olive2: '#363824',
        oliveLight: '#7C9070',
        clay: '#D18E7A',
        clayDeep: '#B06E5C',
        gold: '#C9A227',
        line: 'rgba(27,27,22,0.12)',
        white2: '#FBF9F4',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
