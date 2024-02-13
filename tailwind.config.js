/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        track: {
          "50": "hsla(0,0%,100%,0.2)",
          "100": "#f6f9fc"
        },
        stripblack: {
          "50": "",          
          "100": "#adbdcc",
          "800": "#0a2540",
          "900":"#425466"
        },
        primary: {
          "50": "",
          "800": "#635bff",
          "900":""
        },
        accent: {
          "50": "#00d4ff",
          "800": "",
          "900":""
        },
      },
      boxShadow: {
        "dash":"0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)",
        "dashboard":"inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)"
      },
      fontFamily: {
        "default":"sohne-var,'Helvetica Neue',Arial,sans-serif",
      }
    },
  },
  plugins: [],
}
