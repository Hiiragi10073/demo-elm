const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    port: 4000,
    open: true,
  },
  // 配置别名
  chainWebpack: config => {
    config.resolve.alias.
      set('@', resolve('src')).
      set('assets', resolve('src/assets')).
      set('components', resolve('src/components')).
      set('pages', resolve('src/pages')).
      set('main', resolve('src/pages/main')).
      set('orders', resolve('src/pages/orders')).
      set('search', resolve('src/pages/search')).
      set('profile', resolve('src/pages/profile'))
  },
  // 配置 px2rem
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  outputDir: 'docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/demo-elm/' : '/'
};