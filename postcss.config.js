module.exports = {
  plugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 75,
      propBlackList: ['font-size', 'clac']
    }),
    require('autoprefixer')()
  ]
}