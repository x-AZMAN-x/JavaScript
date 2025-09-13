let intervalId;
let isRunning = false;
let clickCount = 0;

const numberDisplay = document.getElementById('numberDisplay');
const toggleButton = document.getElementById('toggleButton');

function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

function updateNumber(){
    numberDisplay.textContent = generateRandomNumber();
}

toggleButton.addEventListener("click", () => {
    clickCount ++;
    if (clickCount%2 === 0){
        intervalId = setInterval(updateNumber, 500);
        isRunning = true;
    }
    if (clickCount%2 === 1){
        clearInterval(intervalId);
        isRunning = false;
    }
});