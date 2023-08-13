const { name } = require('./package')
const path = require("path")
const CracoLessPlugin = require("craco-less")
const { Merak, merakPostCss } = require('webpack-plugin-merak')
  
const config = {
  devServer: {
    port: 8092,
    open: false
  },
  style: {
    css: {
      postcss: {
        postcssOptions: {
          plugins: [merakPostCss()],
        },
      },
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly',
        },

      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve("src")
    },
    plugins:[new Merak('react', { force: true })]
  },
  babel: {
    plugins: [
      [ 'import', {
        libraryName: 'antd',
        style: true,
      } ]
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
}

export default config
