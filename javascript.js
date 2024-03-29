const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const endResult = document.querySelector('#endResult');
const playerScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');

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
        buttons.forEach((button) => {
            button.addEventListener('click', playRound)
        });
}

function removeButtonListener(){
                buttons.forEach((button) => {
                    button.removeEventListener('click', playRound)
                });
}

function playRound(e) {
        checkSelections(e.target.textContent.toLowerCase(), getComputerChoice());
}

function checkSelections(playerChoice, computerChoice) {
    if (playerChoice === "👊🏼" && computerChoice === "✌🏼" || 
             playerChoice === "🖐🏼" && computerChoice === "👊🏼" || 
             playerChoice === "✌🏼" && computerChoice === "🖐🏼") {
             displayResult("win", playerChoice, computerChoice)
             if (++playerScore.textContent === 5){
                alert(`Player won ${playerScore.textContent} to ${compScore.textContent}`);
                removeButtonListener();
             }
             }
    else if (playerChoice === computerChoice) {
        displayResult("tie", playerChoice, computerChoice);
    }
    else {
        displayResult("lose", playerChoice, computerChoice);
        if (++compScore.textContent === 5){
            alert(`Computer won ${compScore.textContent} to ${playerScore.textContent}`);
            removeButtonListener();
         }
    }
}

function displayResult(id, playerChoice, computerChoice){
    if(id === "win"){
        result.textContent = `You won! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
    else if(id === "tie"){
        result.textContent = `Tie! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
    else {
        result.textContent = `You lose! Player selected: ${playerChoice} Computer selected: ${computerChoice}`;
    }
}

setButtonListener();