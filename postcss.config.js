module.exports = {
  plugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 100,
      propBlackList: ['font-size', 'clac']
    }),
    require('autoprefixer')()
  ]
}