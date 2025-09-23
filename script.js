console.log("Hello world"); 

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