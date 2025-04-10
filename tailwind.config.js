

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFF4FA',
        'secondary': '#141135',
        'third': '#726E9E',
        'fourth': '#1BBF00',
        'fifth': '#FAFAFE',
        'sixth': '#E6E5F3',
      },
      fontFamily: {
        'san': ['Open Sans'],
        'paprika': ['Paprika'],
      },
      maxWidth: {
        'container': '1170px',
      },
      backgroundImage: {
        'banner': "url('./public/banner.png')",
    
      },
      width: {
        '370': '370px',
      },
      padding: {
        '100': '100px',
      },
      borderRadius: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}