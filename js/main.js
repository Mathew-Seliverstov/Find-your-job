const menuButton = document.querySelector('.menu-button')
const closeButton = document.querySelector('.close')
const menu = document.querySelector('.navbar')

const toggleMenu = () => {menu.classList.toggle('is-open')}

menuButton.addEventListener('click', toggleMenu)

closeButton.addEventListener('click', toggleMenu)
