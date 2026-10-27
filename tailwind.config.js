/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        flow: {
          bg: '#080B0E',
          surface: '#10151A',
          card: '#141B22',
          cardHover: '#1A232C',
          border: '#212D38',
          borderHover: '#2E3E4D',
          primary: '#2FD38A',
          primaryHover: '#26B877',
          primaryDark: '#123A2C',
          primaryGlow: 'rgba(47, 211, 138, 0.22)',
          secondary: '#2BC4D9',
          accent: '#FFB800',
          muted: '#8B9CAE',
          subtle: '#4B5B6D',
          light: '#F4F7FA'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(47, 211, 138, 0.13), transparent 70%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'scanline': 'repeating-linear-gradient(0deg, rgba(47,211,138,0.02) 0px, rgba(47,211,138,0.02) 1px, transparent 1px, transparent 3px)',
        'gradient-primary': 'linear-gradient(135deg, #2FD38A 0%, #2BC4D9 100%)',
        'gradient-primary-soft': 'linear-gradient(135deg, rgba(47,211,138,0.16) 0%, rgba(43,196,217,0.10) 100%)'
      },
      boxShadow: {
        'glow-primary': '0 0 26px -6px rgba(47, 211, 138, 0.25)',
        'glow-subtle': '0 10px 40px -10px rgba(0, 0, 0, 0.8)',
        'card': '0 4px 24px -1px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'panel': 'inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 30px 60px rgba(0,0,0,0.5)',
        'bezel': '0 0 0 1px #212D38, 0 10px 30px -8px rgba(0,0,0,0.6)'
      },
      borderRadius: {
        'panel': '18px'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'seg-flicker': 'seg-flicker 2.4s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'seg-flicker': {
          '0%, 94%, 100%': { opacity: '1' },
          '96%': { opacity: '0.82' }
        }
      }
    },
  },
  plugins: [],
}
