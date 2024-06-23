/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        makeswift: '#EA3BA7',
      },
      fontSize: {
        h1: '3.5rem', // 56px
        h2: '3rem', // 48px
        h3: '2.5rem', // 40px
        h4: '2rem', // 32px
        h5: '1.5rem', // 24px
        h6: '1.25rem', // 20px
        p: '1rem', // 16px
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        expand: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        scrollLeft: 'scrollLeft var(--marquee-duration) linear infinite',
      },
    },
  },
  plugins: [],
}
