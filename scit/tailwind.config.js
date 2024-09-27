/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}', // Add the paths to your content files here
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#242331",
        "secondary": "#FFFFFF"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  // Corrected from DEFAULTS to DEFAULT
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '5rem',
        },
      },
    },
  },
  plugins: [],
}
