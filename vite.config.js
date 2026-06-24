import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('serviceOverrides') || id.includes('serviceManualOverrides')) {
            return 'service-data';
          }
          if (id.includes('blogPostContent')) {
            return 'blog-data';
          }
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('swiper')) return 'swiper';
            if (id.includes('react-icons')) return 'icons';
          }
        },
      },
    },
  },
  server: {
    warmup: {
      clientFiles: [
        './src/main.jsx',
        './src/App.jsx',
        './src/Pages/Home.jsx',
        './src/Component/Header.jsx',
        './src/data/servicesCatalog.js',
      ],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
});
