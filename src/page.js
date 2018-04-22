import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import 'amfe-flexible'

const video = document.querySelector('#J-video')

export default function SwiperPage(node) {
  new Swiper(node, {
    direction: 'vertical',
    loop: false,
    simulateTouch: false,
    on: {
      slideChangeTransitionStart() {
        if (this.activeIndex === 1) {
          video.play()
        } else {
          video.pause()
        }
      }
    }
  })

  // mainSwiper.slideTo()

  new Swiper('#J-index-loop', {
    direction: 'horizontal',
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination'
    }
  })
}