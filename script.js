const btns = document.querySelectorAll('.btns')
const shoppingItems = document.querySelectorAll('.shopping--item')
const reset = document.querySelector('.reset')

document.addEventListener('touchstart', () => console.log('touch called'))

btns.forEach((btn, i) => {
    document.addEventListener('touchstart', () => {
        console.log('TEST')
        shoppingItems[i].classList.toggle('line--through')
    })
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
