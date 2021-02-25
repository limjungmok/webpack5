const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'source-map'
};