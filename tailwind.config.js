/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        banner: {
          darker: "#25003E",
          lighter: "#5316AF",
        },
      }
      
    },
  },
  plugins: [],
}

