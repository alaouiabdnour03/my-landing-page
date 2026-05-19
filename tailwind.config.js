/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#52b788',
        'brand-green-deep': '#2d6a4f',
        'brand-green-pale': '#e9f5ef',
        'brand-navy': '#1b2a4a',
        'brand-bg': '#fafcfa',
        'brand-muted': '#6b7280',
      },
      fontFamily: {
        display: ["'DM Sans'", 'system-ui', 'sans-serif'],
        sans: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'mesh-drift': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3%,4%,0) scale(0.96)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        'mesh-drift-rev': {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(-5%,3%,0) scale(1.1)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        'mesh-drift': 'mesh-drift 22s ease-in-out infinite',
        'mesh-drift-rev': 'mesh-drift-rev 28s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
