const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const ResultDisplay = document.getElementById("Result");

const possibleChoices = document.querySelectorAll("button");

// let userChoice
// let computerChoice
// let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    // console.log(possibleChoice)
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    // console.log(userChoice)

    generateComputerChoice()
    getResult()
}))
    
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or i can use (possibleChoices.length);
    // console.log(randomNumber);

    if(randomNumber === 1) {
        computerChoice = "rock";
    }

    if(randomNumber === 2) {
        computerChoice = "scissor";
    }

    if(randomNumber === 3) {
        computerChoice = "paper";
    }

    computerChoiceDisplay.innerHTML = computerChoice
}   

function getResult() {
    if(computerChoice === userChoice) {
        result = "its a draw!"
    }

    if(computerChoice === "rock" && userChoice === "paper") {
        result = "you win!"
    }

    if(computerChoice === "rock" && userChoice === "scissor") {
        result = "you lost!"
    }

    if(computerChoice === "paper" && userChoice === "scissor") {
        result = "you win!"
    }

    if(computerChoice === "paper" && userChoice === "rock") {
        result = "you lose!"
    }

    if(computerChoice === "scissors" && userChoice === "rock") {
        result = "you win!"
    }

    if(computerChoice === "scissors" && userChoice === "paper") {
        result = "you lose!"
    }
    ResultDisplay.innerHTML = result
}




// comp           user ................
// possibilaty...rock paper scissor 

// rock              paper    =   you win!
// rock              scisser  =   you lose!
// paper             scisser  =   you win!
// paper             rock     =   you lose!
// scisser           rock     =   you win!
// scisser           paper    =   you lose!