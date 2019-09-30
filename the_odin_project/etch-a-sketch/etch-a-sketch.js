// Find containers
const container = document.querySelector(".container");
const sketchpad = document.querySelector(".sketchpad");

function createSketchPad(numGridSquares) {
    // Max size of sketchpad, initial is based on values in CSS
    let maxPixels = 16 * 48;
    let squareSize = maxPixels / numGridSquares;
    
    let gridTemplateValue = "repeat(" + numGridSquares + ", " + squareSize + "px)";
    sketchpad.style.gridTemplateColumns = gridTemplateValue;
    sketchpad.style.gridTemplateRows = gridTemplateValue;

    for (let i = 0; i < numGridSquares; i++) {
        for (let j = 0; j < numGridSquares; j++) {
            const etchDiv = document.createElement("div");
            etchDiv.className = "etchDot";
            etchDiv.style.backgroundColor = "hsl(0, 100%, 100%)";
            etchDiv.style.borderStyle = "solid";
            
            /*
            // Set borders according to square position
            // Does this make the size of the squares irregular?
            if (i == numGridSquares -1) {
                if (j == numGridSquares - 1) {
                    etchDiv.style.borderWidth = "1px";
                } else {
                    etchDiv.style.borderWidth = "1px 0px 1px 1px";
                }
            } else if (j == numGridSquares - 1) {
                etchDiv.style.borderWidth = "1px 1px 0px 1px";
            } else {
                etchDiv.style.borderWidth = "1px 0px 0px 1px";
            }
            */

            // Use these borders for now
            etchDiv.style.borderWidth = "1px";
    
            etchDiv.style.borderColor = "black";
            etchDiv.textContent = ""
            sketchpad.appendChild(etchDiv);
        }
    }
}

function clearSketch() {
    while (sketchpad.hasChildNodes()) {
        sketchpad.removeChild(sketchpad.firstChild);
    }

    userNumGridSquares = prompt("Please enter new grid size.");
    runEtch();
}

function getRandomColorHue() {
    return Math.floor(Math.random() * 360);
}

function addDot(){
    // Apparently, .style.backgroundColor tends to become rgb(255, 255, 255)
    // Even if I initially set rgba() or hsl()
    if (this.style.backgroundColor == "rgb(255, 255, 255)") {
        let h = getRandomColorHue();
        let dotBGColor = "hsl(" + h + ", 100%, 50%)";
        this.style.backgroundColor = dotBGColor;
    } else {
        let currentBGColor = this.style.backgroundColor;
        console.log(currentBGColor);
    }
}

function runEtch() {
    createSketchPad(userNumGridSquares);

    const etchDots = document.querySelectorAll(".etchDot");
    etchDots.forEach(dot => dot.addEventListener("mouseover", addDot));

    const clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearSketch);
}

let userNumGridSquares = 16;
window.addEventListener("load", runEtch);