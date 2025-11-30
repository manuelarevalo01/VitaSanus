import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration - VitaSanus Landing Page
 *
 * Este archivo debe reemplazar o fusionarse con tu tailwind.config.ts existente.
 * Incluye toda la configuración de diseño basada en el style-guide.md
 *
 * @see docs/style-guide.md
 * @see docs/initial-prd.md
 */

const config: Config = {
  // Dark mode deshabilitado para esta landing (solo light mode)
  darkMode: ['class'],

  // Content paths para Tailwind JIT
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  // Prefijo para evitar conflictos (opcional)
  prefix: '',

  theme: {
    // Container configuration
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      // ============================================
      // COLORES - VitaSanus Brand Palette
      // ============================================
      colors: {
        // Background colors
        'vs-bg': '#fdfaf5',           // Crema cálido - fondo principal
        'vs-muted-bg': '#f3f5f2',     // Verde muy claro - secciones alternas

        // Text colors
        'vs-text': '#1f2937',         // Gris oscuro - texto principal
        'vs-muted-text': '#475569',   // Gris medio - texto secundario

        // Brand colors
        'vs-primary': '#579796',      // Verde azulado marca - CTAs, links
        'vs-primary-dark': '#417775', // Hover states
        'vs-accent': '#b0d2bf',       // Verde claro - highlights, badges

        // UI colors
        'vs-border': '#e5e7eb',       // Bordes sutiles

        // Semantic colors
        'vs-success': '#22c55e',
        'vs-warning': '#f59e0b',
        'vs-error': '#ef4444',
        'vs-info': '#3b82f6',

        // Shadcn/ui compatibility (mapea a VitaSanus colors)
        border: '#e5e7eb',
        input: '#e5e7eb',
        ring: '#579796',
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

        secondary: {
          DEFAULT: '#f3f5f2',
          foreground: '#1f2937',
        },

        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },

        muted: {
          DEFAULT: '#f3f5f2',
          foreground: '#475569',
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

        popover: {
          DEFAULT: '#fdfaf5',
          foreground: '#1f2937',
        },

        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
      },

      // ============================================
      // TIPOGRAFÍA
      // ============================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Custom VitaSanus scale
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],      // 56px
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],        // 40px
        'h2': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],         // 32px
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '500' }],       // 28px
        'h4': ['1.5rem', { lineHeight: '1.35', fontWeight: '500' }],       // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],        // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],  // 12px
      },

      // ============================================
      // ESPACIADO
      // ============================================
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // Custom VitaSanus
        '4xl': '2rem',    // 32px
        '5xl': '2.5rem',  // 40px
      },

      // ============================================
      // BOX SHADOWS
      // ============================================
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(87, 151, 150, 0.1), 0 4px 6px -2px rgba(87, 151, 150, 0.05)',
        'soft-lg': '0 10px 30px -5px rgba(87, 151, 150, 0.15), 0 8px 10px -5px rgba(87, 151, 150, 0.08)',
        'glow': '0 0 20px rgba(87, 151, 150, 0.3)',
      },

      // ============================================
      // ANIMACIONES
      // ============================================
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },

      // ============================================
      // BACKDROP BLUR
      // ============================================
      backdropBlur: {
        xs: '2px',
      },
    },
  },

  // ============================================
  // PLUGINS
  // ============================================
  plugins: [
    require('tailwindcss-animate'),

    // Plugin custom para utilidades de VitaSanus
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.section-padding': {
          'padding-top': '3rem',
          'padding-bottom': '3rem',
          '@screen md': {
            'padding-top': '5rem',
            'padding-bottom': '5rem',
          },
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
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
