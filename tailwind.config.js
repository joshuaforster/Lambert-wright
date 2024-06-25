/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customBlue: '#323D40',
        customGray: '#E4E4E3',
        lightBlue: '#55B6D9',
      },
    },
  },
  plugins: [],
}
