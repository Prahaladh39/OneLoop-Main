/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
        oneloop: {
          black: "#000000",
          white: "#FFFFFF",
          copper: {
            light: "#E9A374",
            highlight: "#FDC7A1",
            mid: "#D88855",
            dominant: "#E59C69",
            dark: "#C97B49",
            deep: "#CA7A49",
            shadow: "#66320B",
          }
        }
      },
      fontFamily: {
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      backgroundImage: {
        'copper-gradient': 'linear-gradient(135deg, #FDC7A1 0%, #E59C69 40%, #D88855 70%, #CA7A49 100%)',
        'copper-glow': 'radial-gradient(circle, rgba(229, 156, 105, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      }
    },
  },
  plugins: [],
}
