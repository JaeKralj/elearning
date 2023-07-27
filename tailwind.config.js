/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-218': 'linear-gradient(218deg, var(--tw-gradient-stops))',
        'gradient-180': 'linear-gradient(218deg, var(--tw-gradient-stops))',
      },
      colors: {
        grey: {
          100: '#121212',
          200: '#A7AAAD',
          300: '#DDDDDD',
          400: '#FAFAFA',
        },
        primary: {
          100: '#D19700',
          200: '#F7D339',
          300: '#EBD371',
        },
        secondary: {
          DEFAULT: '#00192E',
          100: '#162C43',
          200: '#20496B',
          300: '#757D8E',
        },
        background: {
          100: '#06080C',
          200: '#0B0F18',
          300: '#ECECEC',
        },
        semantic: {
          error: '#721717',
          success: '#205106',
          warning: '#C54C09',
          info: '#5861B0',
        },
      },
      fontSize: {
        h2: '1.375rem',
      },
      keyframes: {
        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-50deg)' },
        },
        'spin-reverse': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(50deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin 10s ease infinite',
        'spin-reverse-slow': 'spin-reverse 10s ease infinite',
      },
    },
  },
  plugins: [],
}
