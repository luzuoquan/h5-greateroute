import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default function SwiperPage(node) {
  new Swiper(node, {
    direction: 'vertical',
    loop: false,
    simulateTouch: false
  })

  new Swiper('#J-index-loop', {
    direction: 'horizontal',
    simulateTouch: false
  })
}