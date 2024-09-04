/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },

    boxShadow: {
      theme: "0px 2px 20px 0px #0000000A;"
    
    },
    

    extend: {

      colors: {
        "science-blue": "#0768B5",
        "amber-black": "#072D4B",
        "sky-blue": "#2F9FF8",


      },
    },
  },
  plugins: [],
}

