/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          100: '#004AAC',
          200: '#0052d4',
        },
        lightBlue: {
          100: '#8083FF',
        },
        primaryYellow: {
          100: 'FFCC00',
        },
        black: '#222',
      },
      spacing: {
        sm: '.25em',
        base: '.5em',
        lg: '1em',
        xl: '1.5em',
      },
    },
  },
  plugins: [],
};
