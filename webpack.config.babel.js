import path from 'path';
import nodeExternals from 'webpack-node-externals';

import pkg from './package.json';
var env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env,
  target: 'web',
  node: {
    fs: 'empty',
  },
  entry: {
    ebakus: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: {
      root: 'Web3Ebakus',
      amd: pkg.name,
      commonjs: pkg.name,
    },
  },
  externals: [
    nodeExternals({
      whitelist: [
        'web3',
        'any-promise',
        'eth-lib/lib/rlp',
        'eth-lib/lib/bytes',
      ],
    }),
  ],
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  // optimization: {
  //   occurrenceOrder: true, // To keep filename consistent between different modes (for example building only)
  // },
  stats: {
    colors: true,
  },
  devtool: env == 'development' ? 'source-map' : '',
  devServer: {
    contentBase: './lib',
  },
};
