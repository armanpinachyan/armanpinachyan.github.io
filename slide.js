const slides = document.querySelectorAll('.slide')
const icon1 = document.querySelector('#aj')

const random = max => Math.floor(Math.random()*max)
const index= random(slides.length)
slides[index].classList.add('active')

slides.forEach(slide=>{
    slide.addEventListener('click', ()=>{
        clasadd()
        slide.classList.add('active')
    })
})

function clasadd(){
    slides.forEach(slide =>{
        slide.classList.remove('active')
    })
}