/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./dist/*.html', "./src/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
