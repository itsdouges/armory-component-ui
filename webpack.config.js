const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const paths = require('./config/paths');

const baseConfig = {
  bail: true,

  context: __dirname,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs-module',
  },

  externals: [
    'axios',
    'classnames',
    'react',
    'react-redux',
    'redux',
    'redux-thunk',
    'lodash',
    /^lodash\/.+$/,
    'reselect',
  ],

  module: {
    strictExportPresence: true,

    rules: [
      {
        test: /\.(css|less)$/,
        include: [paths.appSrc, paths.appNodeModules],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: '1',
                localIdentName: '[hash:base64:4]',
              },
            },
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: Infinity,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ],
};

const compiledConfig = merge(baseConfig, {
  entry: {
    'armory-component-ui': './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
      },
    ],
  },
});

module.exports = compiledConfig;
