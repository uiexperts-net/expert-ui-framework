/// <reference types="vite/client" />
// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    // Any CSS configuration if needed
  },
});

