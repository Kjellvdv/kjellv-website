import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coral: '#d76262',
        saffron: '#f59e0b',
        sage: '#edf4f0',
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
