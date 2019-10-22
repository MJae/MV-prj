const displayArea = document.getElementById("calcDisplay");

let displayCleared = false;
let currentNumber = 0, userNumbers = [];
let chosenOps = [];

// Toggle to clear all data or just the current display
let goodToClearAll = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "add") {
        return add(a, b);
    } else if (operator == "subtract") {
        return subtract(a, b);
    } else if (operator == "multiply") {
        return multiply(a, b);
    } else if (operator == "divide") {
        return divide(a, b);
    }
}

function clearDisplay() {
    displayArea.textContent = "0";
    displayCleared = true;
    currentNumber = 0;

    if (goodToClearAll) {
        userNumbers = [];
        chosenOps = [];
        goodToClearAll = false;
    }
}

function populateDisplay() {
    if (displayCleared) {
        displayArea.textContent = this.id;
    } else {
        displayArea.textContent = displayArea.textContent + this.id;
    }
    
    currentNumber = Number(displayArea.textContent);
    displayCleared = false;
}

function saveOperation() {
    currentOp = this.id;
    userNumbers.push(currentNumber);

    // Calculate
    if (currentOp != "equals") {
        chosenOps.push(currentOp);
        clearDisplay();
    } else {
        // Will result in wrong calculations because of 0 start
        // Not good for multiplication
        let result = userNumbers.shift();
        while (chosenOps.length > 0) {
            let num = userNumbers.shift();
            let opNow = chosenOps.shift();
            result = operate(opNow, result, num);
            console.log(result);
        }

        clearDisplay();
        displayArea.textContent = result;
        goodToClearAll = true;
    }
}

function runCalculator() {
    const numbers = document.querySelectorAll(".numButton");
    numbers.forEach(number => number.addEventListener("click", populateDisplay));

    const basicOps = document.querySelectorAll(".basicOpButton");
    basicOps.forEach(op => op.addEventListener("click", saveOperation));

    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearDisplay);
}

window.addEventListener("load", runCalculator);
