/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust-building blue for reliable AI interaction
        'primary': '#2563EB', // blue-600
        'primary-50': '#EFF6FF', // blue-50
        'primary-100': '#DBEAFE', // blue-100
        'primary-200': '#BFDBFE', // blue-200
        'primary-300': '#93C5FD', // blue-300
        'primary-400': '#60A5FA', // blue-400
        'primary-500': '#3B82F6', // blue-500
        'primary-600': '#2563EB', // blue-600
        'primary-700': '#1D4ED8', // blue-700
        'primary-800': '#1E40AF', // blue-800
        'primary-900': '#1E3A8A', // blue-900
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors - Progress green for successful conversation flow
        'secondary': '#059669', // emerald-600
        'secondary-50': '#ECFDF5', // emerald-50
        'secondary-100': '#D1FAE5', // emerald-100
        'secondary-200': '#A7F3D0', // emerald-200
        'secondary-300': '#6EE7B7', // emerald-300
        'secondary-400': '#34D399', // emerald-400
        'secondary-500': '#10B981', // emerald-500
        'secondary-600': '#059669', // emerald-600
        'secondary-700': '#047857', // emerald-700
        'secondary-800': '#065F46', // emerald-800
        'secondary-900': '#064E3B', // emerald-900
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors - Warm orange for positive feedback moments
        'accent': '#EA580C', // orange-600
        'accent-50': '#FFF7ED', // orange-50
        'accent-100': '#FFEDD5', // orange-100
        'accent-200': '#FED7AA', // orange-200
        'accent-300': '#FDBA74', // orange-300
        'accent-400': '#FB923C', // orange-400
        'accent-500': '#F97316', // orange-500
        'accent-600': '#EA580C', // orange-600
        'accent-700': '#C2410C', // orange-700
        'accent-800': '#9A3412', // orange-800
        'accent-900': '#7C2D12', // orange-900
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FAFAFA', // gray-50
        'surface': '#FFFFFF', // white
        'surface-secondary': '#F9FAFB', // gray-50

        // Text Colors
        'text-primary': '#111827', // gray-900
        'text-secondary': '#6B7280', // gray-500
        'text-muted': '#9CA3AF', // gray-400

        // Status Colors
        'success': '#10B981', // emerald-500
        'success-50': '#ECFDF5', // emerald-50
        'success-100': '#D1FAE5', // emerald-100
        'success-foreground': '#FFFFFF', // white

        'warning': '#F59E0B', // amber-500
        'warning-50': '#FFFBEB', // amber-50
        'warning-100': '#FEF3C7', // amber-100
        'warning-foreground': '#FFFFFF', // white

        'error': '#EF4444', // red-500
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E5E7EB', // gray-200
        'border-light': '#F3F4F6', // gray-100

        // Brand Colors for Conversion
        'brand-primary': '#4F46E5', // indigo-600
        'brand-secondary': '#06B6D4', // cyan-500
        'conversion-accent': '#F59E0B', // amber-500
        'trust-builder': '#10B981', // emerald-500
        'cta': '#DC2626', // red-600
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.2' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'conversation': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'gentle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'typing-dot': 'typingDot 1.4s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        slideInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        typingDot: {
          '0%, 60%, 100%': { opacity: '0.3' },
          '30%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      aspectRatio: {
        'golden': '1.618',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}