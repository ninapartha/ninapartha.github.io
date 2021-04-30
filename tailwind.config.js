module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-bg': "url('/img/circuit.jpeg')",
       })
    },
    container: {
      center: true,
      padding: '2rem'
    },
  },

  variants: {},
  plugins: [],
}
