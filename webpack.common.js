const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (mode) {
  return {
    entry: {
      app: [
        '@babel/polyfill', 
        './src/index.jsx', 
        './src/scss/index.scss'
      ]
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|.jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: { // .babelrc 에 달아둠
              cacheDirectory: true,
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: mode,
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({ filename: './css/index.css' }),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
        hot: true
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
  };
}