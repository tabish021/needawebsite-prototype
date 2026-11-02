/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#16A34A',
          dark: '#15803D',
          light: '#F0FDF4',
          ring: '#BBF7D0',
          deep: '#166534',
        },
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
}
