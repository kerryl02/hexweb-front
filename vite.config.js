import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path, { dirname } from 'path';
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    react(),
    ViteMinifyPlugin({}),
  ],
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, './src/modules'),
      '@layout': path.resolve(__dirname, './src/modules/layout'),
      '@navbar': path.resolve(__dirname, './src/modules/layout/navbar'),
      '@components': path.resolve(__dirname, './src/modules/components'),
      '@constants': path.resolve(__dirname, './src/modules/constants'),
      '@assets': path.resolve(__dirname, './src/modules/assets')
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://hexweb.fr', // L'URL de ton backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Réécrire le chemin si nécessaire
      },
    },
  },
  build: {
    target: 'es2015',
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
