const burgerBtn = document.querySelector('.burger-menu')


burgerBtn.addEventListener('click', ()=>{
  document.querySelector('.nav_menu').classList.toggle('show')
  document.querySelector('.profile').classList.toggle('show')
  document.body.classList.toggle('lock')
})