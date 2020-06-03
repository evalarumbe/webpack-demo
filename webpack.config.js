const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    writeToDisk: true,
  },
  entry: {
    app: './src/index.js',
    display: './src/display.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanStaleWebpackAssets: false, // TODO: what does this do?
      cleanOnceBeforeBuildPatterns: [],
      cleanAfterEveryBuildPatterns: [
        '*',
        '!index.html',
      ],
    }),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management',
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
