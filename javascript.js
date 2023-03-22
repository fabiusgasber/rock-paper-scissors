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
    const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
            playRound(e.target.textContent.toLowerCase(), getComputerChoice())
            });
    });
}

function playRound(playerChoice, computerChoice) {
    const result = document.querySelector('#result');
    if (playerChoice === computerChoice) {
            result.textContent = `Tie! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
            keepScore('tie');
        }
    
    else if (playerChoice === "rock" && computerChoice === "scissors" || 
             playerChoice === "paper" && computerChoice === "rock" || 
             playerChoice === "scissors" && computerChoice === "paper") {
             result.textContent = `You won! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
             keepScore('win');
             }
    else {
        result.textContent = `You lose! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
        keepScore('lose');
    }
}

let playerScore = 0;
let computerScore = 0;

function keepScore(id) {
    const gameScore = document.querySelector('#score');
    const userScore = document.querySelector('#playerScore');
    const compScore = document.querySelector('#compScore');
    
    if (id.includes("win") && playerScore < 5) {
                playerScore++;
                userScore.textContent = `Playerscore: ${playerScore}`;
            }
    else if (id.includes("lose") && computerScore < 5) {
                computerScore++;
                compScore.textContent = `Computerscore: ${computerScore}`;
        }
    else if (playerScore === 5 || computerScore === 5 && playerScore > computerScore) {
            gameScore.textContent = "Player wins after 5 rounds";
        }

    else if (playerScore === 5 || computerScore === 5 && playerScore < computerScore) {
            gameScore.textContent = "Computer wins after 5 rounds";
        }

    else if (playerScore === 5 || computerScore === 5 && playerScore === computerScore) {
            gameScore.textContent = "It's a tie after 5 rounds";
        }
    }

getPlayerChoice();