const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const tryAgain = document.querySelector('.tryAgain')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
    mario.classList.remove('jump') 
    }, 500);
}

const loop = setInterval(() => {
    const pipeColision = pipe.offsetLeft;
    const marioColision = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipeColision < 50 && pipeColision > -50 && marioColision < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipeColision}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioColision}px`

        mario.src = "images/game-over.png"
        mario.style.width = '40px'

        clouds.style.animationPlayState = "paused"

        tryAgain.style.display = "block"

        clearInterval(loop)
    }

}, 10)

tryAgain.addEventListener('click', () => {
    location.reload()
})

document.addEventListener('keydown', jump);
