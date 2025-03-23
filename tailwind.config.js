/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #0037FF 30%, #04142B 100%)'
      }
    }
  },
  plugins: []
}
