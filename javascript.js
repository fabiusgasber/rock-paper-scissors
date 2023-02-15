function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if (choice === 0) {
        return "Rock";
    }

    else if (choice === 1){
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = computerChoice.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock" || 
        playerSelection === "paper" && computerSelection === "paper" || 
        playerSelection === "scissors" && computerSelection === "scissors") {
            return `Tie! Player selected: ${playerSelection} computer selected: ${computerSelection}`;
        }
    
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
             playerSelection === "paper" && computerSelection === "rock" || 
             playerSelection === "scissors" && computerSelection === "paper") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
             }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Whats your choice?"), getComputerChoice()));
    }
}