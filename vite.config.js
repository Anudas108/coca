import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: './src',
  base: '/coca/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './src/assets',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        about: './src/about.html',
        posts: './src/posts.html',
        single: './src/single.html',
      },
    },
  },

  plugins: [
    injectHTML(),
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
