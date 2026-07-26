/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF6',
        beige: '#F8F5EE',
        softyellow: {
          50: '#FFFDF6',
          100: '#FFF8E1',
          200: '#FFEEB3',
          300: '#FFE8A3',
          400: '#FFD54F',
          500: '#FFC107',
        },
        charcoal: '#1F1F1F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 12px 40px -8px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 24px 60px -12px rgba(0, 0, 0, 0.12)',
        glow: '0 8px 30px -6px rgba(255, 213, 79, 0.45)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};
