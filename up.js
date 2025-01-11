const sec = document.getElementById('second-hand');
const min = document.getElementById('minute-hand');
const hr = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(sec, seconds);
    rotateClockHand(min, minutes);
    rotateClockHand(hr, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval(clockTick, 1000);