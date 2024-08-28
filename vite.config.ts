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
          react: ['react', 'react-dom'], 
          //normally manual chunks is used for larger
          //projects and really just depends on project specs. 
         //Kinda unneccessary to use in smaller projects
        },
      },
    },
  }
});
