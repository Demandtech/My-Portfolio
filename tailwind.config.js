import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      dark1: '#050505',
      dark2: '#131313',
      dark3: '#191919',
      dark4: '#303030',
      white: '#fdfdfd',
      'gray-light': '#cdcbcb',
      'gray-dark': '#838383',
      primary: '#627329',
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
