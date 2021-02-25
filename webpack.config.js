const { merge } = require('webpack-merge');

const getCommonConfig = require('./webpack.common.js');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');

module.exports = (env, argv) => {
  const { mode } = argv;
  console.log('[Webpack Config Mode]:', mode);

  const commonConfig = getCommonConfig(mode);
  if (mode === 'development') {
    return merge(commonConfig, devConfig);
  }

  if (mode === 'production') {
    return merge(commonConfig, prodConfig);
  }
}
