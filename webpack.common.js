const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js',
    another: './another-module.js',
    // This 'descriptor syntax' is a Webpack v5 feature. It's in the docs but causes build errors here.
    // shared: ['lodash'],
    // index: { import: './index.js', dependOn: 'shared' },
    // another: { import: './another-module.js', dependOn: 'shared' },
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: {
          loader: 'handlebars-loader',
          options: {
            helperDirs: path.resolve(__dirname, 'src', 'hbs-templates', 'helpers'),
            // helperDirs: path.resolve(__dirname, './src/hbs-templates/helpers'),
          }
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.bundle\.js$/,
        use: 'bundle-loader',
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
    new HandlebarsPlugin({
      helpers: {
        calculateAge: path.resolve(__dirname, 'src', 'hbs-templates', 'helpers', 'calculateAge.js'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // hashing is content-based for extracted CSS
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // })
  ],
  output: {
    chunkFilename: '[name].[chunkhash].js', // generated chunks
    filename: '[name].[chunkhash].js', // entry files that map directly to output files
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
};
