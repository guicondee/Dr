// window.addEventListener('scroll', onScroll)
// onscroll()

function onScroll() {
  showNavOnScroll()
  showbackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    scrollRow.classList.add('scroll')
  } else {
    scrollRow.classList.remove('scroll')
  }
}

function showbackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// SCROLLREVEAL-LIBRARY
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(
  `#home, #home img, #home .stats, #services, #services .card, #about, #about header, #about .content, #about .content img, #contact, #contact header, #contact .content #contact iframe, #footer, #footer header, #footer p, #footer .social-links`
)
