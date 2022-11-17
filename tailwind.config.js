/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NetflixBold: ['NetflixBold', 'sans-serif'],
        Netflix: ['Netflix', 'sans-serif'],
        NetflixMedium: ['NetflixMedium', 'sans-serif'],
        NetflixLight: ['NetflixLight', 'sans-serif'],
      },
      colors: {
        primary: '#141414',
        secondary: '#E5E5E5',
        dark: '#B3B3B3',
        link: '#767676'
      }
    },
  },
  plugins: [],
}
