/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      borderRadius: {
        'xs': '5px',
        DEFAULT: '10px',
        'lg': '13px'
      },
      boxShadow: {
        'primary': '0 4px 0 var(--color-shadow-primary)',
        'secondary': '0 4px 0 var(--color-shadow-secondary)',
        'accent': '0 4px 0 var(--color-shadow-accent)',
      },
      fontSize: {
        'h1': '56px',
        'h2': '40px',
        'h3': '32px',
        'h4': '28px',
        'h5': '20px',
        'body': '16px',
        'subtitle': '12px'
      },
      fontWeight: {
        'bold': 700
      },
      letterSpacing: {
        tightest_2xs: '-0.93px',
        tightest_xs: '-0.67px',
        tightest: '-0.53px',
        tighter: '-0.47px',
        tight: '-0.33px',
        widest: '1px'
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          invert: 'var(--color-text-invert)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-accent-button-text)'
        }
      },
    },
  },
  plugins: [],
}

