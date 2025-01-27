import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite usar funções globais como describe, it, expect
    environment: 'jsdom', // Simula o DOM para testes
    setupFiles: './src/setupTests.js', // Arquivo de configuração inicial
  },
})
