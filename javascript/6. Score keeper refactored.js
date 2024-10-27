const player1 = {
    score: 0,
    display: document.querySelector('.displaypoints1'),
    button: document.querySelector('.player1pointbutton')
}
const player2 = {
    score: 0,
    display: document.querySelector('.displaypoints2'),
    button: document.querySelector('.player2pointbutton')
}
const reset = document.querySelector('.reset')
const select = document.querySelector('#select')
let totalpoints = parseInt(select.value);


function changeScore(player, opponent){
    player.score++
    player.display
    player.display.innerText = player.score
    if (player.score === totalpoints) {
        player.display.style.color = 'green'
        opponent.display.style.color = 'red'
        player.button.setAttribute('disabled', "")
        opponent.button.setAttribute('disabled', "")
        select.setAttribute('disabled', "")
    }
}
player1.button.addEventListener('click', () => {
    changeScore(player1,player2)
})
player2.button.addEventListener('click', () => {
    changeScore(player2,player1)
})


function reset1(){
    for(let player of [player1,player2]){
        player.score = 0
        player.display.innerText = '0'
        player.button.removeAttribute('disabled')
    }
    select.removeAttribute('disabled')
}
reset.addEventListener('click', () => {
    reset1()
})
select.addEventListener('change', () => {
    totalpoints = parseInt(select.value)
    reset1()
})