console.log("Hello world"); 

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];
	
	let randomIndex = Math.floor(Math.random() * choice.length);
	return choice[randomIndex];
	}
	
	console.log(getComputerChoice());
	
	function getHumanChoices() {
		const choices = prompt("Rock, Paper,  Scissors?");
		return choices.toLowerCase();
	}
	console.log(getHumanChoices());
	
	function playRound(humanChoice, computerChoice) {
		const human = humanChoice.toLowerCase();
		const  computer = computerChoice.toLowerCase();
		//Determine the Winner
		if (human === computer) {
			console.log(`Tie! both chose ${human}`); 
			return "tie";
		}	
	
	if ((human === "rock"  && computer === "Scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
		humanScore++ // increment humanScore
	console.log(` You win! ${human} beats ${computer}`);
	return "human";
	} else {
		computerScore++; //increment computerScore
		console.log(`You lose! ${computer} beats ${human}`);
		return "computer";
	}
	}
		
		