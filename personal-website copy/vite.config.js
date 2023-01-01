// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'views/resume.html'),
        portfolio: resolve(__dirname, 'views/portfolio.html'),
        connect: resolve(__dirname, 'views/connect.html'),
      },
    },
  },
})