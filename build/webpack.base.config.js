const ExtractTextPlugin = require('extract-text-webpack-plugin')
const env = process.env.NODE_ENV
module.exports = {
  entry: {
    app: './app.js'
  },
  resolve: {
		extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
        test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules\/(?!(dom7|swiper)\/).*/
      }, {
        test: /\.css/,
        use: env === 'production' ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?url=false',
            publicPath: '/'
        }) : ['style-loader','css-loader']
      }, {
        test: /\.scss/,
        use: env === 'production' ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader','postcss-loader','sass-loader'],
            publicPath: '/'
        }) : ['style-loader','css-loader','postcss-loader','sass-loader']
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}