// Create Set of Data for Computer to choose from
var computerChoices = ["a","b", "c", "d", "e", "f",
 						"g", "h", "i", "j", "k", "l", 
 						"m", "n", "o", "p", "q", "r", 
 						"s", "t", "u", "v", "w", "x", 
 						"y", "z"];

 alert("Are you psychic? Choose a letter and let's find out!");

//Computer must randomly choose a letter
 var computerAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 console.log(computerAnswer);

 //User begins with 9 guesses
 var numberOfGuesses = 9;

 //User begins with Zero Wins
 var userWins = 0;

 //User begins with Zero Losses
 var userLosses = 0;

 //Create an array that will hold User Guesses
 var listOfGuesses = [];


 //Display number of wins, losses, and guesses left
 document.getElementById("wins").innerHTML = userWins;
 document.getElementById("losses").innerHTML = userLosses;
 document.getElementById("guessesLeft").innerHTML = numberOfGuesses;

 //Build out function to decrement numberOfGuesses if choice is incorrect
 function decrement() {
 	numberOfGuesses = numberOfGuesses - 1;
 	return numberOfGuesses;
 }

function guessList(userGuess){
	listOfGuesses.push(userGuess);
	return document.getElementById("Guesses").innerHTML = listOfGuesses;
 }

 function newComputerGuess(computerChoices) {
 	//if you put var in front of computerAnswer it will not update computerAnswer---Scoping issie
 	computerAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 	//console.log(computerAnswer);
 	return computerAnswer;
 }


	
	// This function is ran whenever a user presses a key
	document.onkeyup = function(event) {

		//Determine which Key is pressed
		var userGuess = event.key;
	

		//Display List
		document.getElementById("Guesses").innerHTML = guessList(userGuess);
			console.log(userGuess);
			console.log(computerAnswer);

			if (numberOfGuesses >= 1) {

				if (userGuess === computerAnswer) {
					alert("Wow! Your Psychic Powers are amazing!");
					userWins = userWins + 1;
					document.getElementById("wins").innerHTML = userWins;
					numberOfGuesses = 9;
					listOfGuesses = [];
					alert ("Press any 'OK' then any key (your next guess) to restart");
					newComputerGuess(computerChoices);
					//console.log(computerAnswer);
				}

				else {
					alert("Your mind is a bit hazy.. Try Again..");
					document.getElementById("guessesLeft").innerHTML = decrement(numberOfGuesses);
				}
			}

			else if (numberOfGuesses < 1) {
				alert ("You deff not psychic..")
				userLosses = userLosses + 1;
				document.getElementById("losses").innerHTML = userLosses;
				numberOfGuesses = 9;
				listOfGuesses = [];
				alert ("Press any 'OK' then any key (your next guess) to restart");
				newComputerGuess(computerChoices);
				//console.log(computerAnswer);
			}
	
	}











