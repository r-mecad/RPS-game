console.log("WELCOME MY FRIEND.");

function getComputerChoice() {
  let choice = Math.random();
  if (choice > 0 && choice <= 0.33) return "rock";
  else if (choice > 0.33 && choice <= 0.67) return "paper";
  else return "sissors";
}

function getHumanChoice() {
  while (true) {
    choice = prompt("Enter rock, paper or sissors:").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "sissors")
      return choice;
    else console.log("Wrong input, Enter again:");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(human, computer) {
  if (
    (human == "rock" && computer == "paper") ||
    (human == "paper" && computer == "sissors") ||
    (human == "sissors" && computer == "rock")
  ) {
    console.log(`You lose! ${computer} beats ${human}`);
    roundInfo.innerText= `You lose! ${computer} beats ${human}`;
    computerScore += 1;
    checkWin();
    computercount.innerText = computerScore;
  } else if (
    (computer == "rock" && human == "paper") ||
    (computer == "paper" && human == "sissors") ||
    (computer == "sissors" && human == "rock")
  ) {
    console.log(`You Win! ${human} beats ${computer}`);
    roundInfo.innerText= `You Win! ${computer} beats ${human}`;
    humanScore += 1;
    checkWin();
    humancount.innerText = humanScore;
  } else {
    console.log(`ITS A TIE!! ${human} and ${computer}`);
    roundInfo.innerText= `Its a Tie! ${computer} beats ${human}`;
  }
}

function checkWin() {
  if (humanScore === 5) {
    win.textContent = "YOU WIN. Press reset to play again.";
    rock.disabled = paper.disabled = sissors.disabled = true;
    
  } else if (computerScore === 5) {
    win.textContent = "You lose. Press reset to play again.";
    rock.disabled = paper.disabled = sissors.disabled = true;
  }
}

function resetGame()
{
  humanScore = 0;
  computerScore = 0;
  computercount.innerText = computerScore;
  humancount.innerText = humanScore;
  win.textContent = "";
  roundInfo.textContent= "";
  rock.disabled = paper.disabled = sissors.disabled = false;
}



// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//     console.log(`Human = ${humanScore}, Computer= ${computerScore}`);
//   }

//   if (humanScore > computerScore) {
//     console.log("CONGTARULATIONS!!! YOU WON THE GAME.");
//   } else if (humanScore < computerScore) {
//     console.log("ALAS! YOU LOST THE GAME.");
//   } else {
//     console.log("GAME TIED");
//   }
// }

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let sissors = document.getElementById("sissors");
let humancount = document.getElementById("humanScore");
let computercount = document.getElementById("computerScore");
let win = document.getElementById("win");
let reset = document.getElementById("reset");
let roundInfo = document.getElementById("roundInfo");

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

sissors.addEventListener("click", () => {
  playRound("sissors", getComputerChoice());
});

reset.addEventListener("click", () => {
resetGame();
});
