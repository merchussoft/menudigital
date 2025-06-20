/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fresita: {
          fondo: "#FF89B1",
          rojo: "#FF2956",
          crema: "#FFCD5D",
          verde: "#3FB851",
          oscuro: "#5B1A29",
        }
      },
      fontFamily: {
        cartoon: ['"Comic Sans MS"', "cursive"]
      }
    },
  },
  plugins: [],
}

