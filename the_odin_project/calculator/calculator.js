const displayArea = document.getElementById("calcDisplay");

let displayCleared = false;
let operatorChosen = false;
let currentNumber = 0, num1 = 0, num2 = 0;
let chosenOp = "";

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
}

function populateDisplay() {
    if (displayCleared) {
        displayArea.textContent = this.id;
    } else {
        displayArea.textContent = displayArea.textContent + this.id;
    }
    
    currentNumber = Number(displayArea.textContent)
    displayCleared = false;
}

function saveOperation() {
    currentOp = this.id;
    
    if (currentOp != "equals") {
        chosenOp = currentOp;
        operatorChosen = true;
    }

    // Store the number
    if (operatorChosen) {
        num2 = currentNumber;
        clearDisplay()
        operatorChosen = false;
    } else {
        num1  = currentNumber;
        clearDisplay();
        operatorChosen = true;
    }

    if (currentOp == "equals") {
        let result = operate(chosenOp, num1, num2);
        console.log(result);

        /**
         * Write to display here
         **/
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
