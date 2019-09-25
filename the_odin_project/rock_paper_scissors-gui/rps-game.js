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

function getUserPlay() {
    let playerChoice = window.prompt("Rock, Paper, or Scissor?");
    while (true) {
        if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
            return playerChoice;
        } else {
            playerChoice = window.prompt("Invalid. Try again. Rock, Paper, or Scissor?");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    let paper = "paper";
    let rock = "rock";
    let scissors = "scissors";

    if (playerSelection == computerSelection) {
        // return "It's a tie!"
        return "tie"
    }

    if (playerSelection == rock && computerSelection == paper || playerSelection == paper && computerSelection == scissors || playerSelection == scissors && computerSelection == rock) {
        // Computer wins
        // return "You Lose! " + computerSelection + " beats " + playerSelection
        return "computer";
    } else {
        // Player wins
        // return "You Win! " + playerSelection + " beats " + computerSelection
        return "player";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numRounds = 0;
    let maxRounds = 5;
    
    let playerSelection
    let winner;

    while (numRounds < maxRounds) {
        playerSelection = getUserPlay();
        const computerSelection = computerPlay();

        winner = playRound(playerSelection, computerSelection);

        if (winner == "player") {
            playerScore++
        } else if (winner == "computer") {
            computerScore++;
        }
        
        console.log("player: " + playerSelection);
        console.log("computer: " + computerSelection);
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);

        numRounds++;
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won!");
    } else {
        console.log("You lost.");
    }
    
}

game();
