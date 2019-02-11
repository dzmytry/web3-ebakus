import path from 'path';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import pkg from './package.json';
var env = process.env.NODE_ENV || 'development';

/*
 * Common configuration chunk to be used for both
 * client-side and server-side bundles
 */

const baseConfig = {
  mode: env,
  entry: {
    ebakus: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  stats: {
    colors: true,
  },
  devtool: env == 'development' ? 'source-map' : '',
  devServer: {
    contentBase: './lib',
  },
};

const clientConfig = {
  target: 'web',
  node: {
    fs: 'empty',
  },
  output: {
    filename: '[name].browser.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: {
      root: 'Web3Ebakus',
      amd: pkg.name,
      commonjs: pkg.name,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: ['./example', './lib'],
  },
};

const serverConfig = {
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['web3', 'eth-lib'],
    }),
  ],
};

module.exports = [
  merge(baseConfig, clientConfig),
  merge(baseConfig, serverConfig),
];
