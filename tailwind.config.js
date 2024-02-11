/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#3498db', // Primary blue color
        'secondary': '#2c3e50', // Secondary blue color
      },
    },
  },
  plugins: [],
}

