function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    let selection = "";

    if (choice === 0) {
        selection = "👊🏼";
    }

    else if (choice === 1){
        selection = "🖐🏼";
    }

    else {
        selection = "✌🏼";
    }
    return selection.toLowerCase();
}

function setButtonListener() {
    const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', playRound)
        });
}

function removeButtonListener(){
    const buttons = document.querySelectorAll('button');
                buttons.forEach((button) => {
                    button.removeEventListener('click', playRound)
                });
}

function playRound(e) {
        checkSelections(e.target.textContent.toLowerCase(), getComputerChoice());
}

function checkSelections(playerChoice, computerChoice) {
    const result = document.querySelector('#result');
    const endResult = document.querySelector('#endResult');
    const playerScore = document.querySelector('#playerScore');
    const compScore = document.querySelector('#compScore');
    if (playerChoice === "👊🏼" && computerChoice === "✌🏼" || 
             playerChoice === "🖐🏼" && computerChoice === "👊🏼" || 
             playerChoice === "✌🏼" && computerChoice === "🖐🏼") {
             result.textContent = `You won! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
             if (++playerScore.textContent === 5){
                endResult.textContent = `Player won after 5 rounds`;
                removeButtonListener();
             };
             }
    else if (playerChoice === computerChoice) {
        result.textContent = `Tie! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
    else {
        result.textContent = `You lose! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
        if (++compScore.textContent === 5){
            endResult.textContent = `Computer won after 5 rounds`;
            removeButtonListener();
         };
    }
}

setButtonListener();