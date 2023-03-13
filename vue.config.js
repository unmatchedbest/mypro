const path = require('path');
module.exports = {
  devServer: {
    compress: true,
    hot: true,
  },

  publicPath: './',
  outputDir: '../f_ptlb_h5',

  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const obj = args;
      obj[0]['process.env'] = {
        ...obj[0]['process.env'],
      };
      return args;
    });
    config.plugin('html').tap((args) => {
      const obj = args;
      obj[0].title = 'pro';
      return obj;
    });
  },

  productionSourceMap: false,

  css: {
    extract: true,
    loaderOptions: {
      postcss: {
        plugins: [
          (root, result) => {
            const designWidth = result.opts.from.includes(path.join('node_modules', 'vant')) ? 375 : 750;
            return require('postcss-px-to-viewport')({
              viewportWidth: designWidth,
            })(root, result);
          },
        ],
      },
    },
  },
};
