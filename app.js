import SwiperPage from './src/page'
import './src/styles/base.scss'

const swiperNode = SwiperPage('#J-main-swiper')

const node = document.querySelector('#J-main-swiper')

if (module.hot) {
  module.hot.accept('./src/page.js', () => {
    SwiperPage('#J-main-swiper')
  })
}