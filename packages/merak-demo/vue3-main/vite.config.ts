import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      sourcemap: true,
      outDir: path.join(
        __dirname,
        '../../../micro-app-demos/merak-demo/vue3-main'
      )
    },
    define: { __DEV__: process.env.CI ? false : true },
    server: {
      port: 8081,
      open: true
    },
    base: loadEnv(mode, process.cwd()).VITE_BASE_URL,
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [AntDesignVueResolver()]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData:
            '@import "node_modules/ant-design-vue/dist/antd.less";',
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
