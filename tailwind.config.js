/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
      scPurple: '#C317FF',
      scBlack: '#000',
      scLightWhite: '#F0F0F0',
      scGray: '#636363',
    },
    extend: {
      maxWidth: {
        scContainerLg: '1536px',
        scContainer: '1390px',
        scContainerSm: '1158px',
        scContainerXs: '995px',
      },
      fontSize: {
        scH1: '3.5rem',
        scH2: '2rem',
        scH3: '3rem',
        scH4: '1.5rem',
        scH5: '1.25rem',
        scH6: '1.125rem',
        scBody1: '1rem',
        scBody2: '0.875rem',
        scCaption: '0.75rem',
        scCaption2: '0.625rem',
      },
    },
  },
  plugins: [],
};
