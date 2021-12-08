
// evento para el carrusel

window.addEventListener('DOMContentLoaded', (event)=>{
  console.log('DOM fully loaded and parsed');
  const images = [ 'assets/img4.jpg','assets/img5.jpg','assets/img6.jpg']
  let i = 1
  const img1 = document.querySelector('.img1')
  const img2 = document.querySelector('.img2')

  img1.src = images[0]
  console.log(img1.src)

  const showslice = ()=>{

    img2.src = images[i]
    img2.classList.add('img-active')
    
    i++

    if(i == images.length){
      i = 0
    }

    setTimeout(()=>{
      img1.src = img2.src
      img2.classList.remove('img-active')
    }, 3000)
  }

  setInterval( showslice , 5000);
})







const navBar = document.querySelector('.nav-container')
const menu = navBar.querySelector('ul')
const button = document.querySelector('.menu-btn')
const buttonIcon = button.querySelector('i')

window.addEventListener('scroll', (event)=>{
  if (this.scrollY > 10){
    navBar.classList.add('scroll-nav')
  }else{
    navBar.classList.remove('scroll-nav')
  }
})
button.addEventListener('click', ()=>{
  menu.classList.toggle('activate')
  buttonIcon.classList.toggle('activate')
})
