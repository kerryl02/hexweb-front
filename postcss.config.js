export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'iOS >= 10', 'Safari >= 10'], // Cible les versions iOS/Safari
    },
  },
}
