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

function setButtonListener() {
    const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', playRound)
        });
}

function playRound(e) {
        checkSelections(e.target.textContent.toLowerCase(), getComputerChoice());
}

function checkSelections(playerChoice, computerChoice) {
    const result = document.querySelector('#result');
    if (playerChoice === "rock" && computerChoice === "scissors" || 
             playerChoice === "paper" && computerChoice === "rock" || 
             playerChoice === "scissors" && computerChoice === "paper") {
             result.textContent = `You won! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
             }
    else if (playerChoice === computerChoice) {
        result.textContent = `Tie! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
    else {
        result.textContent = `You lose! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
}

setButtonListener();