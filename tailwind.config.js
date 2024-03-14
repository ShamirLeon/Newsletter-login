/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        DarkSlateGrey: '#242742',
        Tomato: '#ff6257',
        Charcoal: '#36384e',
        Grey: '#9294a0',
        Pink: '#ff5377',
        Orange: '#ff693e'
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

