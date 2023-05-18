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
      },
      animation: {
        scaleDown: 'scaleD 7s ease-in-out 1 forwards',
        scaleUp: 'scaleU 0.7s ease-out 1 forwards',
        textDown: 'textD 7s ease-in-out 1 forwards',
        textUp: 'textU 0.7s ease-out 1 forwards',
      },
      keyframes: {
        scaleD: {
          '10%': { transform: 'scale(1.5)' },
          '90%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleU: {
          '100%': { transform: 'scale(1.5)' }
        },
        textU: {
          '100%': { marginBottom: '0rem', opacity: 1 }
        },
        textD: {
          '10%': { marginBottom: '0rem', opacity: 1 },
          '90%': { marginBottom: '0rem', opacity: 1 },
          '100%': { marginBottom: '-9rem', opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
