/// <reference types="vite/client" />

// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
 
}

export default defineConfig({
  plugins: [react()],
  css: {
    // Any CSS configuration if needed
  },
});

