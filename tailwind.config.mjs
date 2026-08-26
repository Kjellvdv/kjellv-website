import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coral: '#d76262',
        saffron: '#f59e0b',
        sage: '#8a9b76',
        // Darker sage for text and filled pills; raw sage fails AA at small sizes.
        'sage-deep': '#5a6b46',
        'text-main': '#2b2b2b',
        'text-secondary': '#6b6763',
        'bg-primary': '#f7f5f2',
        'bg-secondary': '#e7e3de',
        divider: '#d6d1cb',
      },
      fontFamily: {
        display: ['Fraunces', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      // Layered shadows. Two stacked shadows (a tight contact shadow plus a
      // wide soft one) read as real depth where a single blur reads as fog.
      boxShadow: {
        soft: '0 1px 2px rgba(43,43,43,0.04), 0 4px 14px -6px rgba(43,43,43,0.08)',
        lift: '0 2px 4px rgba(43,43,43,0.05), 0 14px 32px -10px rgba(43,43,43,0.16)',
        panel: '0 1px 3px rgba(43,43,43,0.05), 0 20px 50px -20px rgba(43,43,43,0.22)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2b2b2b',
            fontFamily: 'Inter, sans-serif',
            'h1, h2, h3, h4': {
              fontFamily: 'Fraunces, sans-serif',
              color: '#2b2b2b',
            },
            a: {
              color: '#d76262',
              '&:hover': { color: '#b54f4f' },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
