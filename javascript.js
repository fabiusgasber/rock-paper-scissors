function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    let selection = "";

    if (choice === 0) {
        selection = "rock";
    }

    else if (choice === 1){
        selection = "paper";
    }

    else {
        selection = "scissors";
    }
    return selection.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();

    if (playerSelection === "rock" && computerChoice === "rock" || 
        playerSelection === "paper" && computerChoice === "paper" || 
        playerSelection === "scissors" && computerChoice === "scissors") {
            return `Tie! Player selected: ${playerSelection} computer selected: ${computerChoice}`;
        }
    
    else if (playerSelection === "rock" && computerChoice === "scissors" || 
             playerSelection === "paper" && computerChoice === "rock" || 
             playerSelection === "scissors" && computerChoice === "paper") {
                return `You win! ${playerSelection} beats ${computerChoice}`;
             }
    else {
        return `You lose! ${computerChoice} beats ${playerSelection}`
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, scisscors?");
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (i === 4 && playerScore > computerScore) {
            console.log("Player wins after 5 rounds");
        }
        else if (i === 4 && playerScore < computerScore) {
            console.log("Computer wins after 5 rounds");
        }
        else if (result.includes("win")) {
            playerScore++;
        } 
        else if (result.includes("lose")) {
            computerScore++;
        } 
    }
}

game();