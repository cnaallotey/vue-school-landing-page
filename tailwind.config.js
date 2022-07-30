/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Rubik', 'Sans-serif'],
      'heading': ['Bebas Neue', 'cursive']
    },
    colors: {
      "secondary": {
        "50": "#ffff78",
        "100": "#fff86e",
        "200": "#ffee64",
        "300": "#ffe45a",
        "400": "#ffda50",
        "500": "#ffd046",
        "600": "#f5c63c",
        "700": "#ebbc32",
        "800": "#e1b228",
        "900": "#d7a81e"
      },
      "primary": {
        "50": "#3f3983",
        "100": "#352f79",
        "200": "#2b256f",
        "300": "#211b65",
        "400": "#17115b",
        "500": "#0d0751",
        "600": "#030047",
        "700": "#00003d",
        "800": "#000033",
        "900": "#000029"
      },
      'white':colors.white,
      'blue':colors.blue,
      'red' : colors.red,
      'gray':colors.gray,
      'button': "#667dff",
      'cornflower-blue': {
        DEFAULT: '#667DFF',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#E0E5FF',
        '300': '#B8C2FF',
        '400': '#8FA0FF',
        '500': '#667DFF',
        '600': '#2E4DFF',
        '700': '#0025F5',
        '800': '#001CBD',
        '900': '#001485'
      },

    },
    extend: {},
  },
  plugins: [],
}
