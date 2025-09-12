let counter = 0;

const counterDisplay = document.getElementById('counter')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const resetBtn = document.getElementById('reset')

incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
})

decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
})

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
})

function updateDisplay(){
    counterDisplay.textContent = counter;
}