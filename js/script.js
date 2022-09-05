const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('perfil_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

setTimeout(getData, 1250)

function getData() {
  header.innerHTML =
    '<img src="https://assets.materialup.com/uploads/bb860163-d0a3-4755-9088-798e19bd6609/preview.png" width="160" />'
  title.innerHTML = 'Comsitec Store'
  excerpt.innerHTML = 'Con el objetivo de incrementar las ventas, desarrollamos una página web E-commerce para la marca Comsitec Store'
  profile_img.innerHTML =
    '<img src="https://joelmenacho.github.io/HogarMenacho/img/HM_CABECERA.png" alt="" />'
  name.innerHTML = 'Joel Menacho'
  date.innerHTML = 'Sep 04, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}


