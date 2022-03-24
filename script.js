const btns = document.querySelectorAll('.btns')
const shoppingItems = document.querySelectorAll('.shopping--item')
const reset = document.querySelector('.reset')

btns.forEach((btn, i) => {
    btn.addEventListener('click', 'touchscreen', () => {
        console.log('TEST')
        shoppingItems[i].classList.toggle('line--through')
    })
})

reset.addEventListener('click', () => {
    for (let i = 0; i < shoppingItems.length; i++) {
        shoppingItems[i].classList.remove('line--through')
    }
})
