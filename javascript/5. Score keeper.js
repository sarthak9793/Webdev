let player1 = 0
let player2 = 0
const player1pointbutton = document.querySelector('.player1pointbutton')
const player2pointbutton = document.querySelector('.player2pointbutton')
const reset = document.querySelector('.reset')
const points1 = document.querySelector('.points1')
const points2 = document.querySelector('.points2')
const select = document.querySelector('#select')
let totalpoints = 3;
player1pointbutton.addEventListener('click', () => {
    ++player1
    points1.innerText = player1
    if (player1 === totalpoints) {
        points1.style.color = 'green'
        points2.style.color = 'red'
        player1pointbutton.setAttribute('disabled', "")
        player2pointbutton.setAttribute('disabled', "")
        select.setAttribute('disabled', "")
    }
})
player2pointbutton.addEventListener('click', () => {
    ++player2
    points2.innerText = player2
    if (player2 === totalpoints) {
        points2.style.color = 'green'
        points1.style.color = 'red'
        player1pointbutton.setAttribute('disabled', "")
        player2pointbutton.setAttribute('disabled', "")
        select.setAttribute('disabled', "")
    }
})
reset.addEventListener('click', () => {
    points1.innerText = 0
    points2.innerText = 0
    player1 = 0
    player2 = 0
    player1pointbutton.removeAttribute('disabled')
    player2pointbutton.removeAttribute('disabled')
    select.removeAttribute('disabled')
})
select.addEventListener('change', () => {
    totalpoints = parseInt(select.value)
    points1.innerText = 0
    points2.innerText = 0
    player1 = 0
    player2 = 0
    player1pointbutton.removeAttribute('disabled')
    player2pointbutton.removeAttribute('disabled')
    select.removeAttribute('disabled')
})