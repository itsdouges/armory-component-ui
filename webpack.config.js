import path from 'path';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import paths from './paths';

module.exports = {
  bail: true,

  context: __dirname,

  devtool: 'source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'armory-component-ui.js',
    library: 'armoryComponentUi',
    libraryTarget: 'umd',
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
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
      },
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
                minimize: true,
                importLoaders: '1',
                localIdentName: '[hash:base64:5]',
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
            'less-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[ext]',
        }
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(true),
    }),

    new ExtractTextPlugin({
      filename: 'assets/[name].[contenthash:8].css',
      allChunks: true,
    }),
  ],
};
