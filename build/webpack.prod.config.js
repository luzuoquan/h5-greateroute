const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

console.info(path.resolve(__dirname, '../dist'))

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
		filename: 'static/js/[name].[hash].js'
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('static/css/[name].[chunkhash].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: 'app',
        inject: true
    })
  ]
})