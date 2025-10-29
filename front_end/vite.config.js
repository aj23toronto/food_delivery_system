import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ correct base for local vs GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/food_delivery/',
  server: {
    open: true,
    port: 5173,
  },
}))
