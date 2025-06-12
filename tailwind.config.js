/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        neon: {
          pink: '#ff0080',
          blue: '#00d4ff',
          green: '#00ff88',
          yellow: '#ffff00',
          purple: '#8b5cf6',
          orange: '#ff8c00',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#1a1a1a',
          border: '#333333',
          text: '#e0e0e0',
        },
      },
      fontFamily: {
        cyber: ['Orbitron', 'monospace'],
        mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'monospace'],
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        flicker: 'flicker 3s linear infinite',
        scan: 'scan 2s linear infinite',
        glitch: 'glitch 0.3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          from: {
            'text-shadow':
              '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #00d4ff, 0 0 40px #00d4ff, 0 0 50px #00d4ff, 0 0 60px #00d4ff, 0 0 70px #00d4ff',
          },
          to: {
            'text-shadow':
              '0 0 20px #fff, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 50px #ff0080, 0 0 60px #ff0080, 0 0 70px #ff0080, 0 0 80px #ff0080',
          },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 101, 101)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glitch: {
          '0%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)',
          },
          '100%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow':
              '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)',
          },
          '50%': {
            opacity: '0.8',
            'box-shadow':
              '0 0 30px rgba(255, 0, 128, 0.6), 0 0 60px rgba(255, 0, 128, 0.4), 0 0 90px rgba(255, 0, 128, 0.2)',
          },
        },
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        'cyber-gradient':
          'linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #0d1421 50%, #1a0033 75%, #0a0a0a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #ff0080, #00d4ff, #00ff88)',
        'glitch-gradient': 'linear-gradient(90deg, #ff0080, #8b5cf6, #00d4ff)',
      },
      backdropBlur: {
        cyber: '12px',
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)',
        'neon-pink':
          '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(255, 0, 128, 0.3), 0 0 60px rgba(255, 0, 128, 0.1)',
        'neon-green':
          '0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3), 0 0 60px rgba(0, 255, 136, 0.1)',
        cyber: '0 0 30px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'cyber-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
