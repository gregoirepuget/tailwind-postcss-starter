module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { preset: 'default' }, // Pour minifier le CSS
  },
});
