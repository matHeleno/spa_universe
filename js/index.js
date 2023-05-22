import {Router} from './router.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', 'pages/universe.html')
router.add('/exploration', 'pages/exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const logoBG = document.querySelectorAll('nav a img')
const homeBG = document.querySelectorAll('nav :nth-child(2)')
const universeBG = document.querySelectorAll('nav :nth-child(3)')
const explorationBG = document.querySelectorAll('nav :nth-child(4)')


logoBG[0].addEventListener('click', () => {
  document.querySelector('body').classList.remove('backUniverse', 'backExploration')
  document.querySelector('body').classList.add('backHome')
})
homeBG[0].addEventListener('click', () => {
  document.querySelector('body').classList.remove('backUniverse', 'backExploration')
  document.querySelector('body').classList.add('backHome')
})
universeBG[0].addEventListener('click', () => {
  document.querySelector('body').classList.remove('backHome', 'backExploration')
  document.querySelector('body').classList.add('backUniverse')
})
explorationBG[0].addEventListener('click', () => {
  document.querySelector('body').classList.remove('backHome', 'backExploration')
  document.querySelector('body').classList.add('backExploration')
})

