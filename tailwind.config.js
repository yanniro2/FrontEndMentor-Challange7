/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // 'sm':  '375px',
      // 'md': '900px',
      'lg': '1440px',
      'sm': { 'min': '375px', 'max': '600px' }
      // ...defaultTheme.screens,
    },
    colors: {
      'Red': "hsl(0, 78%, 62%)",
      'Cyan': 'hsl(180, 62%, 55%)',
      'Orange': 'hsl(34, 97%, 64%)',
      'Blue': 'hsl(212, 86%, 64%)',
      'Very-Dark-Blue': 'hsl(234, 12%, 34%)',
      'Grayish-Blue': 'hsl(229, 6%, 66%)',
      'Very-Light-Gray': 'hsl(0, 0%, 98%)',

    },
    fontFamily: {
      popins: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      'xs': '15px',
      'm': '22px',
      'large': '30px',
    },
    fontWeight: {
      'thin': 300,
      'medium': 400,
      'bold': 600,
    },
    extend: {},
  },

  plugins: [],
}
