/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {

    fontSize: {
      xs: 14,
      sm: 16, 
      md: 18, 
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'gray-900' : '#121214',
      'gray-800' : '#202024',
      'gray-400' : '#7c7c8a',
      'gray-200' : '#c4c4cc',
      'gray-100' : '#e1e1e6',

      'orange-500' : '#fb923c',
      'orange-200' : '#fcaa67',

    },
    extend: {
      fontFamily: { sans: 'Inter, san-serif  '},
    },
  },
  plugins: [],
}