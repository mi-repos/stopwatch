const timerEl = document.getElementById('timer');
const startbtnEl = document.getElementById('start');
const stopbtnEl = document.getElementById('stop');
const resetbtnEl = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer () {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);

    startbtnEl.disabled = true;
    stopbtnEl.disabled = false;
}

function formatTime(elapsedTime){
    const miliseconds = Math.floor((elapsedTime % 1000)/10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)/1000));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60))/(1000 * 60));
    const hours = Math.floor(elapsedTime /(1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00")
        + ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
        + ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00")
        + "." +
    (miliseconds > 9 ? miliseconds : "0" + miliseconds));
}

function stopTimer () { 
    clearInterval(timerInterval);

    startbtnEl.disabled = false;
    stopbtnEl.disabled = true;
}

function resetTimer () {
    elapsedTime = 0;
    timerEl.textContent = "00:00:00";

    clearInterval(timerInterval);

    startbtnEl.disabled = false;
    stopbtnEl.disabled = true;
}

startbtnEl.addEventListener("click", startTimer);
stopbtnEl.addEventListener("click", stopTimer);
resetbtnEl.addEventListener("click", resetTimer);