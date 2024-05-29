let score = 0;
const scoreBoard = document.getElementById('score');
const holes = document.querySelectorAll('.hole');
let lastHole;
let timeUp = false;
const startButton = document.getElementById('startButton');
const retryButton = document.getElementById('retryButton');

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
    const hole = randomHole(holes);
    hole.querySelector('.mole').classList.add('up');
    setTimeout(() => {
        hole.querySelector('.mole').classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    startButton.style.display = 'none';
    retryButton.style.display = 'none';
    peep();
    setTimeout(() => {
        timeUp = true;
        retryButton.style.display = 'block';
    }, 10000);
}

function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    this.classList.add('hit');
    setTimeout(() => this.classList.remove('hit'), 300); // Remove the class after animation
    scoreBoard.textContent = score;
}

document.querySelectorAll('.mole').forEach(mole => mole.addEventListener('click', bonk));

/*GOLPÈEEE */

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
