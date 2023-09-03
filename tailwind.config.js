/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
    './*.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },

    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        darkblue: '#1E213A',
        gray: {
          150: '#E7E7EB',
          250: '#A09FB1',
          350: '#88869D',
        },

      }
    },
  },
  plugins: [],
}