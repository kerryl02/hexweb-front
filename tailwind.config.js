import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        input: '0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)',
      },
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
        'kallisto': ['Kallisto', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'gray-100': '#f2f4f7',
        cyan: colors.cyan,
        indigo: colors.indigo,
        zinc: colors.zinc,
      },
      spacing: {
        '18': '4.5rem',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme('colors'));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ':root': newVars, // Ajoute les couleurs sous forme de variables CSS globales
      });
    },
  ],
}

