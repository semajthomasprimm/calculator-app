/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          invert: 'var(--color-text-invert)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-accent-button-text)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'result': 'var(--color-result)',
          'buttons': 'var(--color-buttons)',
          'button-primary': 'var(--color-button-primary)',
          'button-primary-hover': 'var(--color-button-primary-hover)',
          'button-secondary': 'var(--color-button-secondary)',
          'button-secondary-hover': 'var(--color-button-secondary-hover)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
        }
      },
      boxShadow: {
        'primary': '0 4px 0 var(--color-shadow-primary)',
        'secondary': '0 4px 0 var(--color-shadow-secondary)',
        'accent': '0 4px 0 var(--color-shadow-accent)',
      }
    },
  },
  plugins: [],
}

