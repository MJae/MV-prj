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

    const cScore = document.getElementById("computerScore");
    const pScore = document.getElementById("playerScore");

    // Display computer hand
    const cHand = document.getElementById("computerHand");
    const cHandFile = "images/rps-" + computerSelection + ".png";
    cHand.src = cHandFile;

    if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;

        cScore.textContent = computerScore;
        pScore.textContent = playerScore;
    }
    
    if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        // Computer wins
        computerScore++;
        cScore.textContent = computerScore;
    } else {
        // Player wins
        playerScore++;
        pScore.textContent = playerScore;
    }

    // Declare winner if either player has already reached five points
    let gameWinner = "none";
    if (playerScore >= 5) {
        if (computerScore < 5) {
            gameWinner = "Player";
        } else if (computerScore >= 5) {
            gameWinner = "Tie"
        }
    } else if (computerScore >= 5) {
        gameWinner = "Computer";
    }

    if (gameWinner != "none") {
        const winnerDisplay = document.getElementById("winnerName");
        winnerDisplay.textContent = gameWinner;

        // Reset scores if someone has already won
        playerScore = 0;
        computerScore = 0;
        cScore.textContent = computerScore;
        pScore.textContent = playerScore;
    }

    return;
}

function playGame() {
    const buttonRock = document.getElementById("rock");
    const buttonPaper = document.getElementById("paper");
    const buttonScissors = document.getElementById("scissors");

    buttonRock.addEventListener("click", playRound);
    buttonPaper.addEventListener("click", playRound);
    buttonScissors.addEventListener("click", playRound);

}

let playerScore = 0;
let computerScore = 0;

window.addEventListener("load", playGame);