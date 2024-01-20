let night = document.querySelector('.night')
let day = document.querySelector('.day')
let body = document.querySelector('body')


night.addEventListener('click',function(){
    day.classList.remove('on')
    this.classList.add('on')
    body.classList.add('on')
})
day.addEventListener('click',function(){
    night.classList.remove('on')
    this.classList.add('on')
    body.classList.remove('on')
})