/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: { 500: '#1db954', 600: '#1ed760' },
        customBlue: {
          400: '#326ebc',
          500: '#004aac',
          600: '#003b89',
          750: '#002556',
        },
        customLightBlue: {
          500: '#0052d4',
        },
        customBlueViolet: {
          500: '#8083ff',
          550: '#7375e5',
          700: '#4c4e99',
        },
        customYellow: {
          350: '#ffdb4c',
          450: '#ffd119',
          500: '#ffcc00',
          550: '#e5b700',
        },
        
        black: '#121212',
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
