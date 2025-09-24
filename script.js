console.log("Hello world"); 
function playGame() {
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];
	
	let randomIndex = Math.floor(Math.random() * choice.length);
	return choice[randomIndex];
	}
	
	// console.log(getComputerChoice());
	
	function getHumanChoice() {
		const choices = prompt("Rock, Paper,  Scissors?");
		return choices.toLowerCase();
	}
	// console.log(getHumanChoices());
	
	function playRound(humanChoice, computerChoice) {
		const human = humanChoice.toLowerCase();
		const  computer = computerChoice.toLowerCase();
		//Determine the Winner
		if (human === computer) {
			console.log(`Tie! both chose ${human}`); 
			return "tie";
		}	
	
	if ((human === "rock"  && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
		humanScore++ // increment humanScore
	console.log(` You win! ${human} beats ${computer}`);
	return "human";
	} else {
		computerScore++; //increment computerScore
		console.log(`You lose! ${computer} beats ${human}`);
		return "computer";
	}
	}
  // play 5 round 
  for (let round = 1; round <= 5; round++) {
  	console.log(`\n --- round ${round} ---`);
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound (humanChoice,  computerChoice);
  console.log(`score: Human $ {humanScore} - computer $ {computerScore}`);
  }
  //Declear a Final winner 
  console.log("\n --- Game over ---");
  if (humanScore > computerScore) {
  	console.log(`You win the Game! ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
  	console.log(`computer Wins the Game! ${computerScore} to ${humanScore}`);
  } else {
  	console.log(`the Game is a tie!  ${computerScore} to ${humanScore}`);
  }
 }
 //Start the Game 
 playGame();
  
  	
		
		