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
            button.addEventListener('click', buttonListener)
        });
}

function buttonListener(e) {
        playRound(e.target.textContent.toLowerCase(), getComputerChoice());
}

function playRound(playerChoice, computerChoice) {
    const result = document.querySelector('#result');
    if (playerChoice === computerChoice) {
            result.textContent = `Tie! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
            
        }
    
    else if (playerChoice === "rock" && computerChoice === "scissors" || 
             playerChoice === "paper" && computerChoice === "rock" || 
             playerChoice === "scissors" && computerChoice === "paper") {
             result.textContent = `You won! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
             }
    else {
        result.textContent = `You lose! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
}

getPlayerChoice();