/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customMint: '#E0F8F2',
        white: '#FFFFFF',
        grayDark: '#58595D',
        grayDarker: '#2E2F35',
        tealDark: '#009387',
        cream: '#FDF3EA',
        mint: '#E0F8F2',
        lavender: '#EEECFF',
        orange: '#FF6D2C',
        navy: '#080B1D',
        grayLight: '#D1C7BE',
        softOrange: '#FF8C52',
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', 'cursive'],
      },
    },
  },
  plugins: [],
};
