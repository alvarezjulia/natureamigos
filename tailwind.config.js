module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'park': "url('/src/assets/park.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
