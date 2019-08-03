const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  publicPath: 'mp3-or-plus-player/',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    https: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@modules', resolve('node_modules'));
  },
  productionSourceMap: !1,
  crossorigin: 'use-credentials',
  // configureWebpack(...allin) {
  //   console.log(`allin: ${allin.join(' ')}`);
  // },
  css: {
    modules: true,
  },
};
