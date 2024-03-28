import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Frankie/',  // Adjust if necessary
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Rollup options if needed
    }
  }
});
