
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const welcomeDiv = document.getElementById('welcome');
welcomeDiv.textContent = "🎮 Welcome, Bigview! Ready to test your luck in Rock, Paper, Scissors? ✊📄✂️";
welcomeDiv.style.color = "purple";
welcomeDiv.style.fontSize = "1.2rem";
welcomeDiv.style.marginButton = "10px";
welcomeDiv.style.fontWeight = "bold";

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
				
				if (result.includes("win")) {
					resultDiv.style.color = "green";
					} else if (result.includes("lose")) {
						resultDiv.style.color = "red";
						} else if (result.includes("tie")) {
							resultDiv.style.color = "blue";
							}
				scoreDiv.innerHTML = `<strong>Score</strong> — 
<span style="color: limegreen;">You: ${humanScore}</span> | 
<span style="color: crimson;">Computer: ${computerScore}</span>`;
scoreDiv.style.fontSize = "1.1rem";
scoreDiv.style.marginTop = "8px";
				
				if (humanScore === 5 || computerScore === 5) {
					gameOver = true; 
					const winner = humanScore === 5 ? "🎉 You win the Game! 🏆" : "💻 Computer wins the Game 😢";
					const finalMessage = document.createElement("p");
					finalMessage.textContent =  winner;
					finalMessage.style.fontSize = "1.3rem";
					finalMessage.style.fontWeight = "bold";
					finalMessage.style.marginTop = "10px";
					finalMessage.style.textShadow = "1px 1px 3px black";
					
					if (humanScore === 5) {
						finalMessage.style.color = "limegreen";
						} else {
							finalMessage.style.color = "crimson";
							}
					resultDiv.append(finalMessage);
			
		// create play Again button
		const playAgainBtn = document.createElement("button");
		playAgainBtn.textContent = "Play Again 📟";
		playAgainBtn.style.backgroundColor = "673ab7";
		playAgainBtn.style.color = "white";
		playAgainBtn.style.padding = "10px 20px";
		playAgainBtn.style.fontSize = "1.1rem";
		playAgainBtn.style.border = "none";
		playAgainBtn.style.borderRadius = "10px";
		playAgainBtn.style.marginTop = "15px";
		playAgainBtn.style.cursor = "pointer";
		playAgainBtn.addEventListener("click", resetGame); 
		resultDiv.appendChild(playAgainBtn);
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
  // reset Game
  function resetGame() {
  	humanScore = 0;
      computerScore = 0;
      gameOver = false;
      resultDiv.textContent = "";
      scoreDiv.textContent = "score - You: 0 | computer: 0";
  
  	}
  
  
  