const webpack = require('webpack');
const package = require('../../package.json');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = (config, options, targetOptions) => {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: ['lodash'],
        presets: [['env', { modules: false, targets: { node: 4 } }]],
      },
    },
  });

  config.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(package.version),
    })
  );

  config.plugins.push(new LodashModuleReplacementPlugin());

  config.plugins.push(
    new MomentLocalesPlugin({
      localesToKeep: ['id'],
    })
  );

  return config;
};
