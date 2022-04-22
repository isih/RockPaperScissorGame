// paper > rock
// rock > sisor
// sisor > paper
//create a list of possible choices
let computerScore = 0
let userScore = 0
let count = 0
let text = ''

// make a function for computer to select a random choice from the given three
function computerSelection() {
    let options = ["rock", "paper", "sisor"]
    return options[Math.floor(Math.random() * options.length)]
}

function startGame() {
  //starts the game
}

// Make a function that plays a round of game and log out the winner. takes parameters computerChoice() and userChoice.

function playRound(userChoice) {
  count++
  let computerChoice = computerSelection()

  if(computerChoice === "paper" && userChoice === "rock") {
    computerScore += 1
    text += "<br>You Lose! Paper beats rock.."
  } 
  else if(computerChoice === "rock" && userChoice === "sisor") {
    computerScore += 1
    text += "<br>You Lose! Rock beats sisor..."
  } 
  else if(computerChoice === "sisor" && userChoice === "paper") {
    computerScore += 1
    text += "<br>You Lose! Sisor beats paper..."
  }
    
  else if(computerChoice === "rock" && userChoice === "paper") {
    userScore += 1
    text += "<br>You Win! Paper beats rock..."
  }
  else if(computerChoice === "sisor" && userChoice === "rock") {
    userScore += 1
    text += "<br>You Win! Rock beats sisor..."
  }
  else if(computerChoice === "paper" && userChoice === "sisor") {
    userScore += 1
    text += "<br>You Win! Sisor beats paper..."
  }
  else if(computerChoice === "paper" && userChoice === "paper") {
    text += "<br>This Round is a Draw..."
  }
  else if(computerChoice === "sisor" && userChoice === "sisor") {
    text += "<br>This Round is a Draw..."
  }
  else if(computerChoice === "rock" && userChoice === "rock") {
    text += "<br>This Round is a Draw..."
  }
  else {
    text += "<br>Invalid Input! Please check you spellings...";
  }

  let cR = document.getElementById("currentRound")
  cR.innerHTML = text
  getScore()
}

function getScore(){
  let cS = document.getElementById("computerS")
  let uS = document.getElementById("userS")
  cS.innerHTML = "<p>Computer Score " + computerScore + " Points!</p>"
  uS.innerHTML = "<p>User Score " + userScore + " Points!</p>"

  if(count == 5) {
    winner()
  }
}


function winner() {
  console.log(count);
  let cS = document.getElementById("computerS")
  let uS = document.getElementById("userS")
  let dr = document.getElementById("draw")
  let fS = document.getElementById("finalScore")
  computerLost = userScore - computerScore
  userLost = computerScore - userScore
  if(computerScore > userScore) {
    fS.innerHTML = "<p>Computer Won by " + userLost + " Points!</p>"
  }
  else if(computerScore < userScore) {
    fS.innerHTML = "<p>User Won by " + computerLost + " Points!</p>"
  }
  else {
    fS.innerHTML = "<p>It's a Draw... Click on 'Play Again' button</p>"
    resetGame()
  }
}


function resetGame() {
  let cS = document.getElementById("computerS")
  let uS = document.getElementById("userS")
  let dr = document.getElementById("draw")
  let wins = document.getElementById("wins")
  let cR = document.getElementById("currentRound")
  let fS = document.getElementById("finalScore")
  computerScore =0;
  userScore = 0;
  text = ''
  cS.innerHTML = ""
  uS.innerHTML = ""
  dr.innerHTML = ""
  wins.innerHTML = ""
  cR.innerHTML = ""
  fS.innerHTML = ""
}
