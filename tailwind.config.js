/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#66C0F4",
      secondary: "#4B619B", 
      text: {
        main: "#F3F3F3", 
        dim: "#76808C",
      },
      bg: {
        main: "#0E141B",
        highlight: "#1E2329",
        hover: "#313843",
        secondary: "#14344B",
        tertiary: "#212B45",
      },
      accent: {
        green: "#A1CD44",
        red: "#CD5444",
        yellow: "#C1B15F",
      },
    },
    extend: {},
  },
  plugins: [],
}