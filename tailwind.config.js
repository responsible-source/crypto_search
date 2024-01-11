/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '991px',
      xl: '1200px'
    },
    extend: {
      colors:{
        darkBlack: '#000',
        white: '#fff',
        green: '#008000',
        red:'#FF0000',
        lightBlue: '#e6f7ff',
        border: '#d9d9d9'
      }
    },
  },
  plugins: [],
}

