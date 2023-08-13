import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import vitePluginImp from 'vite-plugin-imp'
import path from 'node:path'
import { Merak } from 'vite-plugin-merak'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: path.join(
      __dirname,
      '../../../micro-app-demos/merak-demo/vite-child'
    )
  },
  base: './',
  server: {
    port: 8093,
    cors: true,
  },
  plugins: [
    Merak('vite_react') as any,
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
