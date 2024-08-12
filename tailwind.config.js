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
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

