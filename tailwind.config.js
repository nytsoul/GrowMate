/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#22c55e',
          'green-light': '#4ade80',
          'green-dark': '#16a34a',
          'green-glow': 'rgba(34,197,94,0.15)',
          indigo: '#4f46e5',
          'indigo-light': '#6366f1',
        },
        dark: {
          900: '#0d1117',
          800: '#0b0e15',
          750: '#101520',
          700: '#141b26',
          600: '#1a2235',
          500: '#1e2a40',
          400: '#253348',
          300: '#2e3e58',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-grid': 'linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 4s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(34,197,94,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(34,197,94,0.7), 0 0 40px rgba(34,197,94,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'green': '0 0 20px rgba(34,197,94,0.3)',
        'green-lg': '0 0 40px rgba(34,197,94,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
