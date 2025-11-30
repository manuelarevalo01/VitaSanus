/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // VitaSanus Brand Colors - "Clínica pero Natural"
        'vs-bg': '#fdfaf5',           // Crema cálido - fondo principal
        'vs-muted-bg': '#f3f5f2',     // Verde muy claro - secciones alternas
        'vs-text': '#1f2937',         // Gris oscuro - texto principal
        'vs-muted-text': '#475569',   // Gris medio - texto secundario
        'vs-primary': '#579796',      // Verde azulado marca - CTAs, links
        'vs-primary-dark': '#417775', // Hover states
        'vs-accent': '#b0d2bf',       // Verde claro - highlights, badges
        'vs-border': '#e5e7eb',       // Bordes sutiles

        // Semantic colors (built on brand palette)
        background: '#fdfaf5',
        foreground: '#1f2937',

        primary: {
          DEFAULT: '#579796',
          foreground: '#ffffff',
          dark: '#417775',
          light: '#6fa9a8',
          50: '#f0f7f7',
          100: '#d9ebeb',
          200: '#b3d7d7',
          300: '#8dc3c3',
          400: '#67afaf',
          500: '#579796',
          600: '#467c7b',
          700: '#356160',
          800: '#244645',
          900: '#132b2a',
        },

        accent: {
          DEFAULT: '#b0d2bf',
          foreground: '#1f2937',
          50: '#f4f9f6',
          100: '#e9f3ed',
          200: '#d3e7db',
          300: '#bddbc9',
          400: '#a7cfb7',
          500: '#b0d2bf',
          600: '#8dbe9f',
          700: '#6aaa7f',
          800: '#47965f',
          900: '#24823f',
        },

        muted: {
          DEFAULT: '#f3f5f2',
          foreground: '#475569',
        },

        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },

        success: {
          DEFAULT: '#22c55e',
          foreground: '#ffffff',
        },

        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Custom type scale for VitaSanus
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '600' }],      // 56px
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],        // 40px
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],         // 32px
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '500' }],       // 28px
        'h4': ['1.5rem', { lineHeight: '1.35', fontWeight: '500' }],       // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],  // 12px
      },

      spacing: {
        // Custom spacing scale for generous layouts
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },

      borderRadius: {
        '4xl': '2rem',      // 32px - para cards destacadas
        '5xl': '2.5rem',    // 40px - para hero elements
      },

      boxShadow: {
        'soft': '0 2px 15px -3px rgba(87, 151, 150, 0.1), 0 4px 6px -2px rgba(87, 151, 150, 0.05)',
        'soft-lg': '0 10px 30px -5px rgba(87, 151, 150, 0.15), 0 8px 10px -5px rgba(87, 151, 150, 0.08)',
        'glow': '0 0 20px rgba(87, 151, 150, 0.3)',
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },

      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // Tailwind Forms plugin para estilos de formularios mejorados
    // require('@tailwindcss/forms'),

    // Plugin custom para utilidades de VitaSanus
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.section-padding': {
          'padding-top': '5rem',
          'padding-bottom': '5rem',
          '@screen lg': {
            'padding-top': '7rem',
            'padding-bottom': '7rem',
          },
        },
        '.container-custom': {
          'max-width': '1280px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@screen sm': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem',
          },
          '@screen lg': {
            'padding-left': '2rem',
            'padding-right': '2rem',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
