const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package')
const { Merak, merakPostCss } = require('webpack-plugin-merak')

const path = require('path')

module.exports = defineConfig({
  outputDir: path.join(__dirname, '../../../micro-app-demos/merak-demo/vue2-child'),
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  devServer: {
    port: 8091,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    plugins: [new Merak('vue_cli', { force: true })],
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [merakPostCss()],
        },
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
})
