/** @type {import('tailwindcss').Config} */
// Grey for ground, blue for action, peach for warmth, black for weight.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          50: '#F7F7F8',
          100: '#EFF0F2',
          200: '#E3E5E9',
          300: '#CDD1D7',
          400: '#9CA2AB',
          500: '#646B75', // muted text, AA on grey-50 and white
          700: '#3A3F47',
        },
        blue: {
          50: '#EEF2FD',
          100: '#DCE4FB',
          200: '#B9C8F6',
          300: '#8CA6F0',
          500: '#2F5BEA',
          600: '#2449C7', // primary: buttons, links
          700: '#1C3A9E',
          900: '#0F1F52',
        },
        peach: {
          50: '#FEF6F1',
          100: '#FDEEE4',
          200: '#F9DCC8',
          300: '#F4C3A3',
          400: '#EEA882',
          700: '#94431D', // peach-family text, AA on peach-100
        },
        ink: {
          DEFAULT: '#0C0E12',
          soft: '#1A1D23',
          line: '#2A2E36',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      maxWidth: { frame: '76rem' },
      letterSpacing: { label: '0.14em' },
      boxShadow: {
        card: '0 1px 2px rgba(12,14,18,0.04), 0 8px 24px -12px rgba(12,14,18,0.10)',
        lift: '0 2px 4px rgba(12,14,18,0.05), 0 18px 40px -18px rgba(28,58,158,0.28)',
      },
    },
  },
  plugins: [],
}
