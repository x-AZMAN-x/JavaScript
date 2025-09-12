let startTime;
let timerInterval;
let elapsedTime = 0;

function displayTime(){
    const milliseconds = Math.floor(elapsedTime % 1000);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    const display = `${String(hours).padStart(2,'0')}:
    ${String(minutes).padStart(2,'0')}:
    ${String(seconds).padStart(2,'0')}.
    ${String(milliseconds).padStart(3,'0')}`;

    document.getElementById('display').textContent = display;
}

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        displayTime();
    }, 1);
}

function pauseTimer(){
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    elapsedTime = 0;
    displayTime();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);