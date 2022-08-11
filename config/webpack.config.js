const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '..');
const SRC_DIRECTORY = path.join(__dirname, 'src');

const config = {
  entry: [path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules'],
    extensions: ['.js'],
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: [path.join(SRC_DIRECTORY), 'index.html'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(SRC_DIRECTORY, 'assets'),
          to: path.join(ROOT_DIRECTORY, 'build'),
        },
      ],
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = config;
