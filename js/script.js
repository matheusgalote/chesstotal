function clickShowPiece() {

  const pecas = document.querySelectorAll('.lista-pecas li')
  const pecaInfo = document.querySelectorAll('.xadrez-peca-info section')
  const pecaMove = document.querySelectorAll('.move-peca div')

  pecaInfo[0].classList.add('ativo')
  pecaMove[0].classList.add('ativo')

  function ativaPeca(index) {
    pecaInfo.forEach((item) => {
      item.classList.remove('ativo')
    })
    pecaMove.forEach((peca) => {
      peca.classList.remove('ativo')
    })
    pecaInfo[index].classList.add('ativo')
    pecaMove[index].classList.add('ativo')
  }

  pecas.forEach((peca, index) => {
    peca.addEventListener('click', function() {
      ativaPeca(index)
    })
  })
}
clickShowPiece()

function infoPlayer() {
  const jogadores = document.querySelectorAll('.jogador-info dt')

  jogadores[0].classList.add('ativo')
  jogadores[0].nextElementSibling.classList.add('ativo')

  jogadores.forEach((jogador) => {
    jogador.addEventListener('click', function() {
      jogador.classList.toggle('ativo')
      jogador.nextElementSibling.classList.toggle('ativo')
    })
  })
}

infoPlayer()

function scrool() {

  const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}

scrool()

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
  const active = nav.classList.contains('active')
  event.currentTarget.setAttribute('aria-expanded', active)

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')

  }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)

function removeMenuMobile() {
  const menuLink = document.querySelectorAll('.menu__link')

  function linkAction() {
    const menu = document.querySelector('#menu')
  }
}