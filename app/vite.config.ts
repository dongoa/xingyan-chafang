import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chafang/',
  server: {
    port: 5176,
    open: false,
    fs: { allow: ['..', '../figma-export'] },
  },
})
