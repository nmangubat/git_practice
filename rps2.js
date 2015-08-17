
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66 && randomNumber >= 0.34) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move) {
	    return move;
    } else {
    	return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move) {
	    return move;
    } else {
    	return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove ==="rock" && computerMove === "rock") {
		winner = "tie";
	
	} else if (playerMove ==="rock" && computerMove === "paper") {
		winner = "computer";
	
	} else if (playerMove ==="rock" && computerMove === "scissor") {
		winner = "player";
	
	} else if (playerMove ==="paper" && computerMove === "rock") {
		winner = "player";
	
	} else if (playerMove ==="paper" && computerMove === "paper") {
		winner = "tie";
	
	} else if (playerMove ==="paper" && computerMove === "scissor") {
		winner = "computer";
	
	} else if (playerMove ==="scissor" && computerMove === "rock") {
		winner = "computer";
	
	} else if (playerMove ==="scissor" && computerMove === "paper") {
		winner = "player";
	
	} else if (playerMove ==="scissor" && computerMove === "scissor") {
		winner = "tie";
	}
	
	if (winner === "player") {
	    console.log("You Won");
	} else if (winner === "computer") {
	    console.log("computer won")
	} else {
	    console.log("It's a tie.")
	}
	return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    // repeat until one wins 5 times
    while(playerWins < 5 && computerWins < 5) {
    	// get player move
		var playerMove = getPlayerMove();
		// get computer move
		var computerMove = getComputerMove();
	
		// check who wins
		var winner = getWinner(playerMove, computerMove);
		if (winner === "player") {
			playerWins++;
		} else {
			computerWins++;
		}
    }
    
    return [playerWins, computerWins];
}

var results = playToFive();
console.log(results);


//hi