/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lamec-yellow': '#ffc800',
        'lamec-yellow-hover': '#e6b400',
        'lamec-yellow-light': '#fff4cc',
        'lamec-dark': '#111111',
        'lamec-card': '#ffffff',
        'lamec-gray': '#f9f9f9',
        'lamec-border': '#eeeeee',
        'lamec-text': '#333333',
        'lamec-text-light': '#666666',
        background: '#ffffff',
        foreground: '#111111',
        card: '#ffffff',
        'card-foreground': '#111111',
        primary: '#ffc800',
        'primary-foreground': '#ffffff',
        muted: '#f5f5f5',
        'muted-foreground': '#666666',
        accent: '#ffc800',
        'accent-foreground': '#111111',
        border: '#eeeeee',
        ring: '#ffc800',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
