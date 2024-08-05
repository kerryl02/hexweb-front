import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@sections': '/src/components/sections'
    },
  },
  build: {
    rollupOptions: {
      // Configuration de Rollup pour minifier JS et CSS (déjà par défaut)
      output: {
        // Optionnel : Gérer la sortie minifiée
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    minify: 'terser', // Utiliser Terser pour la minification JS
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log
      },
    },
    cssCodeSplit: true, // Gère la séparation et minification des fichiers CSS
  },
});
