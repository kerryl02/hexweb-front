/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        'gray-100': '#f2f4f7',
      },
      spacing: {
        '18': '4.5rem',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [],
}

