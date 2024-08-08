/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily : {
        Poppins : ['Poppins']
      },
      colors: {
        'primary': '#121026',
        'orange' : '#ED8720',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

