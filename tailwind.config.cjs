/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#732E1F',
          500: '#BF5239',
          400: '#D98D62',
        },
        warning: {
          500: '#FBA94C',
        },
        error: {
          500: '#F75A68',
        },
        gray: {
          900: '#09090A',
          700: '#121214',
          600: '#29292E',
          500: '#323238',
          300: '#8D8D99',
          200: '#C4C4CC',
          100: '#E1E1E6',
        }
      }
    },
  },
  plugins: [],
};
