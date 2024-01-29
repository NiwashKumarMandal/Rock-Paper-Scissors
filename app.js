let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");




choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor ="#081b31";
  document.querySelector("button").classList.remove("hide");
};

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const index = Math.floor(Math.random() * 3);
  return options[index];
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerText = `you won! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
    uScore.innerText = userScore;
    document.querySelector("button").classList.remove("hide");
  } else {
    compScore++;
    msg.innerText = `you Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
    cScore.innerText = compScore;
    document.querySelector("button").classList.remove("hide");
  }
};

const playGame = (userChoice) => {
  const compChoice = generateCompChoice();
  // console.log(compChoice);
  if (userChoice == compChoice) {
    drawGame();
  }else{
     let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //user has scissor
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};


document.querySelector("button").addEventListener("click", reload);
function reload() {
    location.reload();
}

// const reload = () =>{
//     location.reload();
// }
