const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.resolve(__dirname, 'www');

module.exports = {
  entry: {
       app: ['./src/index', 'webpack-hot-middleware/client']
   },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'example.html',
      template: './dist/template.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, dist)
    }
};
