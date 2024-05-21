/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Colors used in the project
      colors: {
        primary: "#26A69C",
        secondary: "#001242",
      }
    },
  },
  plugins: [],
}

