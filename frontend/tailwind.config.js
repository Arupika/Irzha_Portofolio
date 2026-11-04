// tailwind.config.js
/** @type {import('tailwindcss').Config} */

// Design tokens: satu sumber warna, tipografi, radius, bayangan, dan animasi.
// Ganti nilai di sini, seluruh aplikasi ikut berubah.
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        base: '#080B14',
        raised: '#101625',
        card: '#151D2E',
        hair: '#212B3D',
        bright: '#F8FAFC',
        dim: '#94A3B8',
        brand: { light: '#60A5FA', DEFAULT: '#3B82F6', dark: '#2563EB' },
        violet: { light: '#A78BFA', DEFAULT: '#8B5CF6' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: { eyebrow: '0.28em' },
      borderRadius: { card: '1.25rem' },
      boxShadow: {
        card: '0 18px 40px -24px rgba(2, 6, 23, 0.9)',
        glow: '0 0 45px -18px rgba(59, 130, 246, 0.55)',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', md: '1.5rem' },
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        blink: { '0%, 45%': { opacity: '1' }, '50%, 100%': { opacity: '0' } },
        float: {
          '0%, 100%': { transform: 'translateY(-6px)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        blink: 'blink 1s step-end infinite',
        float: 'float 7s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
