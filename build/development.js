const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const path = require('path')

const config = require('./webpack.dev.config.js')
const options = {
  contentBase: path.resolve('./'),
  hot: true,
  host: '192.168.1.107'
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(8080, '192.168.1.107', () => {
  console.log('dev server listening on port 8080')
});