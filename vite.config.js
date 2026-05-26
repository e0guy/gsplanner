import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração oficial do Vite para projeto React na Vercel.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
