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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(10deg) rotateY(-10deg)' },
          '50%': { transform: 'translateY(-15px) rotateX(10deg) rotateY(-10deg)' },
        },
        'line-pulse': {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '15%': { opacity: '0.8' },
          '70%': { opacity: '0.3' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'line-pulse': 'line-pulse 5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
