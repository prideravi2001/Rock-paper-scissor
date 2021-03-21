let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBord_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
// Cashing dum :- store for the future purpose

// Computer choice function
function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = (Math.floor(Math.random() * 3));
	// console.log(randomNumber);
	return choices[randomNumber];
}
// console.log(getComputerChoice());
function convertToWord(letter){
	if(letter === "rock") return "Rock";
	if(letter === "paper") return "paper";
	if(letter === "scissor") return "Scissor";
}

// Win Function
function win(user , computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "User".fontsize(3).sub();
	const smallCompWord = "Comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord} You Win! 😁😁😁😁😁`;
	userChoice_div.classList.add('green-glow');
	setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
}
// Lose Function
function lose(user , computer){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "User".fontsize(3).sub();
	const smallCompWord = "Comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord} You Lost! 💩💩💩💩💩`;
	userChoice_div.classList.add('red-glow');
	setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}
// Draw Function
function draw(user , computer){
	const smallUserWord = "User".fontsize(3).sub();
	const smallCompWord = "Comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equal's ${convertToWord(computer)}${smallCompWord} ! It's a Draw ⚔⚔⚔⚔⚔`;
	userChoice_div.classList.add('black-glow');
	setTimeout(function(){userChoice_div.classList.remove('black-glow')}, 300);
}


/** This is the game function 
	Will take the users choices and computer choice also
*/
function game(userChoice){
	// console.log("This is "+userChoice);
	const computerChoice = getComputerChoice();
	// console.log("Users choices => "+userChoice);
	// console.log("Computer choices => "+computerChoice);
	switch(userChoice + computerChoice){
		case "rocks":
		case "paperr":
		case "scissorp":
			// console.log("Users Wins");
			win(userChoice,computerChoice);
			break;
		case "rockp":
		case "papers":
		case "scissorr":
			lose(userChoice,computerChoice);
			// console.log("Users Loses");
			break;
		case "rockr":
		case "paperp":
		case "scissors":
			draw(userChoice,computerChoice);
			// console.log("It's a draw.");
			break;
	}

}
// User Click Function 
function main() {

	rock_div.addEventListener('click',function() {
		// console.log("Hey you Clicked on rock ");
		game("rock");
	})
	paper_div.addEventListener('click',function() {
		// console.log("Hey you Clicked on paper ");
		game("paper");
	})
	scissor_div.addEventListener('click',function() {
		// console.log("Hey you Clicked on scissor ");
		game("scissor");
	})

}
main();