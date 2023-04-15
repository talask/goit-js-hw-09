function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let setIntervalId;

btnStart.addEventListener('click', fnBodySetColor);
btnStop.addEventListener('click', fnBodyStopSetColor);

function fnBodySetColor(){
    btnStart.disabled = true;
    setIntervalId  = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function fnBodyStopSetColor (){
    btnStart.disabled = false;
    clearInterval(setIntervalId);
}
