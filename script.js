
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];
	
	let randomIndex = Math.floor(Math.random() * choice.length);
	return choice[randomIndex];
	}
		
		const buttons = document.querySelectorAll("button");
		const resultDiv = document.getElementById("results");
		const scoreDiv = document.getElementById("score");
		
		buttons.forEach(button => {
			button.addEventListener("click", () => {
				if (gameOver) return; // stop if game is already done.
				const humanChoice = button.id;
				const computerChoice = getComputerChoice();
				const result = playRound(humanChoice, computerChoice);
				// update the Dom
				resultDiv.textContent = `${result} You chose ${humanChoice}, computer chose ${computerChoice}.`;
				scoreDiv.textContent = `score - You: ${humanScore} | computer: ${computerScore}`;
				
				if (humanScore === 5 || computerScore === 5) {
					gameOver = true; 
					const winner = humanScore === 5 ? "You win the Game!" : "computer wins the Game";
					const finalMessage = document.createElement("p");
					finalMessage.textContent =  winner;
					resultDiv.append(finalMessage);
		}			
			
			});
		});
		
		function playRound(humanChoice, computerChoice) {
		const human = humanChoice.toLowerCase();
		const  computer = computerChoice.toLowerCase();
		//Determine the Winner
		if (human === computer) {
			return "it's a tie!";
		}	
		
	if ((human === "rock"  && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {
		humanScore++ // increment humanScore
	return ` You win! ${human} beats ${computer}`;
	} else {
		computerScore++; //increment computerScore
		return `You lose! ${computer} beats ${human}`;
	}
	}
  