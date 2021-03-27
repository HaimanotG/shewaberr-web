module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  colors: {
    'orange': {
      '50': '#fff6f0',
      '100': '#ffeee0',
      '200': '#ffdcc2',
      '300': '#ffba85',
      '400': '#ff8e38',
      '500': '#e66300',
      '600': '#b85000',
      '700': '#8f3e00',
      '800': '#753300',
      '900': '#6b2e00',
    },
    'green': {
      '50': '#dbfff9',
      '100': '#c2fff5',
      '200': '#66ffe6',
      '300': '#00ebc4',
      '400': '#00c7a6',
      '500': '#00a388',
      '600': '#00806a',
      '700': '#006655',
      '800': '#005244',
      '900': '#004d40',
    },
    'blue': {
      '50': '#f6f8fe',
      '100': '#eef1fc',
      '200': '#dce3f9',
      '300': '#becbf4',
      '400': '#96aced',
      '500': '#6b8ae6',
      '600': '#436adf',
      '700': '#234fd1',
      '800': '#1d40aa',
      '900': '#1b3b9d',
    },
  }
}
