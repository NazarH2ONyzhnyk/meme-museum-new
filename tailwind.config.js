module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#FC00FF",
        },
        blue: {
          400: "#00DBDE",
          500: "#56CCF2",
          600: "#2F80ED",
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage: ['hover', 'focus'],
      scale: ['active'],
    },
  },
  plugins: [],
}
