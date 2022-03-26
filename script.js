//const btns = document.querySelectorAll('.btns')
const reset = document.querySelector('.reset')
const shoppingItems = document.querySelectorAll('.shopping--list')
const inputs = document.querySelectorAll('.inputs')

inputs.forEach((input, i) => {
    input.addEventListener('click', () => {
        shoppingItems[i].classList.toggle('line--through')
    })
})

inputs.forEach((input, i) => {
    input.addEventListener('touch', () => {
        shoppingItems[i].classList.toggle('line--through')
    })
})

function init() {
    let el = document.getElementById('target1')
    el.ontouchstart = startTouch
}

//btns.forEach((btn, i) => {
//   btn.addEventListener('click', () => {
//       shoppingItems[i].classList.toggle('line--through')
////   })
//})

// reset.addEventListener('click', () => {
//     for (let i = 0; i < shoppingItems.length; i++) {
//         shoppingItems[i].classList.remove('line--through')
//     }
// })
