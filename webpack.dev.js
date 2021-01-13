const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // not recommended for production
  devServer: {
    writeToDisk: true,
    hot: true,
  },
  optimization: {
    // outputs comments to non-minified dev bundle indicating dead code as "unused harmony export"
    usedExports: true
  },
});
