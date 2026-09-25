import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/tools/division/bloodmoontimer/',
  plugins: [react()],
})
