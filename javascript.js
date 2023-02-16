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

function getPlayerChoice() {
    return prompt("Rock, paper, scisscors?").toLowerCase().trim();
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === "rock" && computerChoice === "rock" || 
        playerChoice === "paper" && computerChoice === "paper" || 
        playerChoice === "scissors" && computerChoice === "scissors") {
            return `Tie! Player selected: ${playerChoice} computer selected: ${computerChoice}`;
        }
    
    else if (playerChoice === "rock" && computerChoice === "scissors" || 
             playerChoice === "paper" && computerChoice === "rock" || 
             playerChoice === "scissors" && computerChoice === "paper") {
                return `You win! ${playerChoice} beats ${computerChoice}`;
             }
    else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
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