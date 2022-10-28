 const likeBtn = document.querySelector('.item__like')
 const like = document.querySelector('.like_icon')
 const form = document.querySelector('.form_subscribe')
 const formInp = document.querySelector('.input_subscribe')
 const burgerBtn = document.querySelector('.burger-menu')


burgerBtn.addEventListener('click', ()=>{
  document.querySelector('.nav-menu').classList.toggle('show')
  document.querySelector('.profile').classList.toggle('show')
})


form.addEventListener('submit', ()=>{
  window.location.href='#'
  formInp.value = ''
})


formInp.addEventListener('invalid', ()=>{
  form.style.animation = 'invalid'
})

likeBtn.addEventListener('click', ()=>{
  like.style.fill ='red'
})


//Slider
function loadScript(src){
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

loadScript('./js/slider.js')
//The end of the slider

