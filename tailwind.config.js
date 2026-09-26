/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'Helvetica Neue', 'sans-serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        paper: '#FAFAF9',
        mist: '#F1F1EF',
        line: '#E4E4E1',
        accent: '#FF4B2B',
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}
