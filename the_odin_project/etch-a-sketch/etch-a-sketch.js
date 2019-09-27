// Create 16x16 grid
const container = document.querySelector(".container");

let maxGridColumns = 16;
let maxGridRows = 16;

for (let i = 0; i < maxGridColumns; i++) {
    for (let j = 0; j < maxGridRows; j++) {
        const etchDiv = document.createElement("div");
        etchDiv.className = "etchDot";
        etchDiv.style.backgroundColor = "#FFFFFF";
        etchDiv.style.borderColor = "#000000";
        etchDiv.textContent = "x"

        container.appendChild(etchDiv);
    }
}