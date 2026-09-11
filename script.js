let msg = document.querySelector("#status");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const comp = options[Math.floor(Math.random() * 3)];
    return comp;
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        document.querySelector("#yourScore").innerText = userScore;
    }else{
        compScore++;
        msg.innerText = `Computer win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        document.querySelector("#compScore").innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msg.innerText = "Game was draw. Play again!"
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})
