const webpack = require('webpack');
const package = require('../../package.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(package.version),
    }),
    new LodashModuleReplacementPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['id'],
    }),
  ],
};
