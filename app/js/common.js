
// js-choose-legal
document.querySelector('.js-choose-legal').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('#uh-page1').classList.remove('show')
  document.querySelector('#uh-page2').classList.add('show')
})

const backs = document.querySelectorAll('.js-choose-back')
backs.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('#uh-page1').classList.add('show')
    document.querySelector('#uh-page2').classList.remove('show')
  })
})