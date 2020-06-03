const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // not recommended for production
  devServer: {
    writeToDisk: true,
    hot: true,
  },
});
