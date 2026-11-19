/** @type {import('tailwindcss').Config} */
// Palette: blue is the identity colour, peach is a sparing accent, grey is ground, charcoal is type.
// The brand blue (#547BA6) is 4.4:1 on white, so it is used for large type and fills only.
// Small text, links and buttons use blue-700 (6.9:1) or blue-600 (6.0:1).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#252A32',
          soft: '#3A404A', // body copy
          muted: '#5A606A', // secondary text: 6.3:1 on white, 5.1:1 on grey
          deep: '#1C2026',
        },
        blue: {
          DEFAULT: '#547BA6',
          50: '#F1F5F9',
          100: '#DFE7F0',
          200: '#BFD0E2',
          600: '#416591',
          700: '#3B5C80',
          800: '#2E4866',
        },
        peach: {
          DEFAULT: '#F5BFAE',
          50: '#FDF4F0',
          100: '#FBE7DF',
          700: '#8A4A36', // peach-family text, 6:1 on peach-50
        },
        grey: {
          DEFAULT: '#E9EAED',
          50: '#F5F6F8',
          300: '#D5D8DD',
          400: '#B4B8BF',
        },
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },
      maxWidth: { frame: '74rem' },
      boxShadow: {
        soft: '0 1px 2px rgba(37,42,50,0.04), 0 12px 32px -16px rgba(37,42,50,0.16)',
      },
    },
  },
  plugins: [],
}
