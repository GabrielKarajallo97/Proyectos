const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('#score');
const startButton = document.querySelector('.start-button');
const retryButton = document.querySelector('.retry-button');
let lastHole;
let timeUp = false;
let score = 0;
let gameTimer;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(document.querySelectorAll('.hole'));
    hole.querySelector('.mole').classList.add('up');
    setTimeout(() => {
        hole.querySelector('.mole').classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    startButton.style.display = 'none';
    retryButton.style.display = 'none';
    score = 0;
    timeUp = false;
    peep();
    gameTimer = setTimeout(() => {
        timeUp = true;
        retryButton.style.display = 'block';
    }, 10000); // 10 segundos de juego
}

function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.classList.remove('up');
    this.classList.add('hit');
    document.getElementById('hitSound').currentTime = 0; // Reinicia el sonido para que se pueda reproducir más de una vez sin esperar a que termine
    document.getElementById('hitSound').play(); // Reproduce el sonido
    setTimeout(() => this.classList.remove('hit'), 300);
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
