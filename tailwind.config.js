module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#393D45',
      },
      fontFamily: {
        'josefin-sans': 'Josefin Sans, sans-serif',
        roboto: 'Roboto, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
