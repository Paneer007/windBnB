module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "airbnbRed":"#EB5757"
      },
      fontFamily:{
        "Montserrat":"Montserrat"
      },
      boxShadow: {
        'infinite': '0 0 0 9999px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
