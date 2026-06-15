import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/loja-meig.vercel/', // ⚠️ COLOQUE O NOME EXATO DO SEU REPOSITÓRIO AQUI (ex: '/loja-meig/')
})