const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('perfil_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

setTimeout(getData, 750)

function getData() {
  header.innerHTML =
    '<img src="https://i.postimg.cc/WpSsB4rd/934-1.jpg" width="160" />'
  title.innerHTML = 'Comsitec System'
  excerpt.innerHTML = 'Nuestro primer proyecto en desarollo web'
  profile_img.innerHTML =
    '<img src="https://joelmenacho.github.io/HogarMenacho/img/HM_CABECERA.png" alt="" />'
  name.innerHTML = 'Joel Menacho'
  date.innerHTML = 'Oct 04, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}


