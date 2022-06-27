import './banner.js'
import './tabs.js'
import './style/index.css'
// 引入字体图标文件
import './assets/fonts/iconfont.css'
// import $ from 'jquery'
// $('#swiper').css('background-color', 'red')
import './style/index.less'
import imgUrl from './assets/22.png'
let img = document.createElement('img')
img.src = imgUrl
document.body.appendChild(img)
// 引入图片-使用
import imgUrl1 from './assets/33.png'
const theImg = document.createElement('img')
theImg.src = imgUrl1
document.body.appendChild(theImg)

class App {
  static a = 123
}

console.log(App.a)

const fn= ()=>{
    console.log('sunshine');
}
fn()