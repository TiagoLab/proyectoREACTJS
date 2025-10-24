// Configuración Vite personalizada por Tiago — Octubre 2025

import { defineConfig } from 'vite'
import pluginReact from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 5174 // Puerto personalizado por Tiago
  }
})

