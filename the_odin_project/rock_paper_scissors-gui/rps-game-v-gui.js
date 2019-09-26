function computerPlay() {
    // Return a random integer between 1 and 3
    let computerChoice = Math.random() * 3;
    if (computerChoice >= 2) {
        return "rock";
    } else if (computerChoice >= 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = this.id;
    console.log(playRound);
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let numRounds = 0;
    let maxRounds = 5;

    while (numRounds < maxRounds) {
        const buttonRock = document.getElementById("rock");
        const buttonPaper = document.getElementById("paper");
        const buttonScissors = document.getElementById("scissors");

        buttonRock.addEventListener("click", playRound);
        buttonPaper.addEventListener("click", playRound);
        buttonScissors.addEventListener("click", playRound);

        numRounds++;
    }
}

window.addEventListener("load", playGame);