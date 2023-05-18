const colors = require('tailwindcss/colors'); // Import the colors object

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors
      },
    },
  },
  plugins: [],
};
