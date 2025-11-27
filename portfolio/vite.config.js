import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO/',   // 👈 exactly matches your repo name (case-sensitive)
})
