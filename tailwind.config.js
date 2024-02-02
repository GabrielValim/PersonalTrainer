/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: '#f92524',
          dark: '#e91a1a'
        },
        gray: {
          light: '#64748b'
        },
        black: {
          dark: '#0f172a'
        },
        ice: {
          white: '#faf9fe'
        }
      },
      fontFamily: {
        Poppins:  ["Poppins", "sans-serif"]
      },
      keyframes: {
        menu_open: {
          transform: 'translateX(0px)'
        }
      }
    },
  },
  plugins: [],
}