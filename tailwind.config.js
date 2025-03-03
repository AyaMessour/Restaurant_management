const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        "dancing-script": ["Dancing Script", "cursive"],
      },
      // animation: {
      //   'rotate-scale-up-normal': 'rotate-scale-up-normal 0.65s linear 1 normal both',
      // },
      // keyframes: {
      //   'rotate-scale-up-normal': {
      //     '0%': {
      //       transform: 'rotate(0deg) scale(0.5)',
      //       opacity: '0',
      //     },
      //     '100%': {
      //       transform: 'rotate(360deg) scale(1)',
      //       opacity: '1',
      //     },
      //   },
      // },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
