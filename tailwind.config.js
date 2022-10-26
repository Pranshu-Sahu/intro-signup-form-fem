/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{ 
         red:'hsl(0, 100%, 74%)',
         green:{10:"hsl(154, 59%, 51%)"},
         blue:'hsl(248, 32%, 49%)',
        darkBlue:'hsl(249, 10%, 26%)',
        grayishBlue:'hsl(246, 25%, 77%)'
      }, 
      fontFamily:{
       'poppins': ['Poppins', "sans-serif"]
      }
    },
  },
  plugins: [],
}
