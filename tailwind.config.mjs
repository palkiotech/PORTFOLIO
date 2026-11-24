/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdfbf7',
          100: '#f7f1e1',
          200: '#eee0bf',
          300: '#e2cb96',
          400: '#d3b068',
          500: '#c5a059', // Official PalkioTech Brushed Gold
          600: '#b08b42',
          700: '#8c6d37',
          800: '#70552b',
          900: '#543f20',
          gold: '#d4af37',
          goldLight: '#f6e7c1',
          goldDark: '#8a682f',
          obsidian: '#080c14',
          charcoal: '#121722'
        },
        accent: {
          emerald: '#059669',
          emeraldLight: '#ecfdf5',
          cyan: '#0284c7',
          amber: '#d97706'
        },
        corporate: {
          bg: '#ffffff',
          surface: '#f8fafc',
          card: '#ffffff',
          cardHover: '#f1f5f9',
          border: '#e2e8f0',
          borderStrong: '#cbd5e1',
          navy: '#0f172a',
          navyLight: '#1e293b',
          muted: '#64748b',
          subtle: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      },
      boxShadow: {
        'enterprise': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'enterprise-md': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'enterprise-xl': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
};
