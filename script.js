let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// // generate random num from 0-9
const generateTarget = () => {
	return Math.floor(Math.random() * 10);
}

// to calculate the difference and determin the winner
const comapareGuesses = (humanGuess, computerGuess, secretNum) => {

	const humanDifference = Math.abs(secretNum - humanGuess);

	const computerDifference = Math.abs(secretNum - computerGuess);

	if (humanDifference <= computerDifference) {
		return true;
	} else {
		return false;
	}

}

const updateScore = (winner) => {
	if (winner === 'human') {
		humanScore += 1
	}
	else if (winner === 'computer') {
		computerScore += 1;
	}
}


const advanceRound = () => {
	currentRoundNumber += 1;
}


advanceRound();