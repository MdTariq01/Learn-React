module.exports = {
  plugins: {
    // Tailwind v4 moved the PostCSS plugin into a separate package.
    // Use @tailwindcss/postcss here (installed as devDependency).
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
