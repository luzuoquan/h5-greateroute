const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
		filename: 'static/js/[name].[hash].js'
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
      exclude: 'src',
      allowExternal: true
    }),
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