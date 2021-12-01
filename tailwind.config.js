module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
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
