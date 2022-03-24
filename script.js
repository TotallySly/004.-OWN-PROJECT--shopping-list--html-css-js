const btns = document.querySelectorAll('.btns')
const shoppingItems = document.querySelectorAll('.shopping--item')
const reset = document.querySelector('.reset')

document.addEventListener('touchstart', () => console.log('touch called'))

document.querySelector('body').addEventListener('click', (e) => {
    console.log('clicked ', e)
    // oh yeah, I'm good!
})

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log('TEST')
        shoppingItems[i].classList.toggle('line--through')
    })
})

reset.addEventListener('click', () => {
    for (let i = 0; i < shoppingItems.length; i++) {
        shoppingItems[i].classList.remove('line--through')
    }
})
