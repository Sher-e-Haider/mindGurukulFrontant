/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "deep-blue": "#4B4453",
        red: "#DC4492",
        blue:"#6B02FC",
        grey:"#382B47",
        "light-blue":"#8685EF",
        "def":"#FC8C79",
        gray2:"#434151",
        error:"rgb(239 68 68)",
        active:"#2D2D2D",
        sideScroll:"#434151",
        yellow:'#FFBA00',
        "dark-grey": "#757575",
        "footer-light":"#F8C6B7",
        "hover-blue":"#4F33F6"
       
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto:['Roboto Mono', 'monospace'],
        sofia:['Merriweather', 'serif'],
        cursive:['Castoro Titling', 'cursive']
      },
      screens: {
        xs: "480px",
        vvs: "380px",
        ss: "620px",
        sm: "768px",
        mdl:"1200px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

