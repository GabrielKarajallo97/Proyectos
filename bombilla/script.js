const lightbulb = document.getElementById('lightbulb');
const switchElement = document.getElementById('switch');
const switchButton = document.querySelector('.switch-button');
const room = document.body;
let isLightOn = false;

switchElement.addEventListener('click', () => {
    isLightOn = !isLightOn;
    if (isLightOn) {
        lightbulb.style.backgroundColor = '#ffeb3b';
        lightbulb.style.boxShadow = '0 0 50px rgba(255, 235, 59, 1)';
        room.style.backgroundColor = '#ffe4b5';
        switchElement.classList.add('switch-on');
    } else {
        lightbulb.style.backgroundColor = '#222';
        lightbulb.style.boxShadow = '0 0 50px rgba(0, 0, 0, 0.5)';
        room.style.backgroundColor = '#333';
        switchElement.classList.remove('switch-on');
    }
});
