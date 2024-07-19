import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/emails': {
        target: 'https://api.resend.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/emails/, '/emails'),
      },
    },
  },
});
