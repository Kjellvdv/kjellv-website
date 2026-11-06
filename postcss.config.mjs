// Tailwind 3 runs through PostCSS. This replaced the @astrojs/tailwind
// integration, which doesn't support Astro 6 or later; it did the same thing.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
