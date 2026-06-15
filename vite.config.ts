import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuração oficial do Tailwind v4 para o Vite
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})