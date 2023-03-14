/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tiltwarp: 'tiltwarp',
      },
    colors: {
    'primary': "#8B2635",
    'primary-2': "#2E3532",
    'solid': "#E0E2DB",
    'secondary': "#D3EFBD",
    'secondary-2': "#D2D4C8"
    }
    },
  },
  plugins: [],
 
}