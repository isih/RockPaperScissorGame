// paper > rock
// rock > sisor
// sisor > paper
//create a list of possible choices
let computerScore = 0
let userScore = 0

// make a function for computer to select a random choice from the given three
function computerSelection() {
    let options = ["rock", "paper", "sisor"]
    return options[Math.floor(Math.random() * options.length)]
}

// Make a function that plays a round of game and log out the winner. takes parameters computerChoice() and userChoice.

function playRound(userChoice) {
  let computerChoice = computerSelection()
  if(computerChoice === "paper" && userChoice === "rock") {
    computerScore += 1
    console.log("You Lose! Paper beats rock..")
  } 
  else if(computerChoice === "rock" && userChoice === "sisor") {
    computerScore += 1
    console.log("You Lose! Rock beats sisor...")
  } 
  else if(computerChoice === "sisor" && userChoice === "paper") {
    computerScore += 1
    console.log("You Lose! Sisor beats paper...")
  }
    
  else if(computerChoice === "rock" && userChoice === "paper") {
    userScore += 1
    console.log("You Win! Paper beats rock...")
  }
  else if(computerChoice === "sisor" && userChoice === "rock") {
    userScore += 1
    console.log("You Win! Rock beats sisor...")
  }
  else if(computerChoice === "paper" && userChoice === "sisor") {
    userScore += 1
    console.log("You Win! Sisor beats paper...")
  }
  else if(computerChoice === "paper" && userChoice === "paper") {
    console.log("This Round is a Draw...")
  }
  else if(computerChoice === "sisor" && userChoice === "sisor") {
    console.log("This Round is a Draw...")
  }
  else if(computerChoice === "rock" && userChoice === "rock") {
    console.log("This Round is a Draw...")
  }
  else {
    console.log("Invalid Input! Please check you spellings...")
  }
}

// make a function that repeat the playRound function for 5 times and displays the winner at the end

function Game() {
  for(let i = 0; i < 5; i++) {
    playRound(prompt("Enter your Choice = ").toLowerCase())
  }
}

Game()
console.log("Computer score = ", computerScore)
console.log("User score = ", userScore)