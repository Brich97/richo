import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', 
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom']
        }
      }
    }
  }
});
