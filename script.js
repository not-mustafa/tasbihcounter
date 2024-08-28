let counter = 0;

function updateDisplay() {
    document.querySelector('.counter-display').textContent = counter;
}

function incrementCounter() {
    counter++;
    updateDisplay();
}

function decrementCounter() {
    counter--;
    updateDisplay();
}

function resetCounter() {
    counter = 0;
    updateDisplay();
}

function editCounter() {
    const newCounterValue = prompt('Enter new counter value:', counter);
    if (newCounterValue !== null && !isNaN(newCounterValue)) {
        counter = parseInt(newCounterValue, 10);
        updateDisplay();
    }
}
