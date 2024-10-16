import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imageOptimizer } from 'next/dist/server/image-optimizer.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageOptimizer({
      includePublic: true,
      pngquant: { quality: [0.6, 0.8] },
      mozjpeg: { quality: 75 },
      webp: { quality: 75 },
    }),
  ],
});
