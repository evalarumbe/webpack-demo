const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      // Recommendation to self: Use both cleanOnceBeforeBuildPatterns and cleanAfterEveryBuildPatterns with the same values, so all builds (first and watched) behave consistently
      cleanOnceBeforeBuildPatterns: [ // on first build, delete everything (*) except (!) html (*.html)
        '*', // must have a positive pattern here because a negative alone doesn't work
        '!*.html', // negative means "remove this from matching results of first pattern"
      ],
      cleanAfterEveryBuildPatterns: [ // on watched builds, delete everything except html
        '*',
        '!*.html',
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack Demo',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
