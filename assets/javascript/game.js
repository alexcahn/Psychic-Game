// define variables
var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var psychicLetter = " ";
var guessesSoFar = [];
// array of all of the options of letters to guess
var lettersGuessed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables that hold references to the places in HTML where we want to display things
var directionsText = document.getElementById("directions-text");
var WinsText = document.getElementById("wins-text");
var LossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left");
var yourGuess = document.getElementById("user-choices");

    

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);


    // Randomly chooses a choice from the lettersGuessed array.
    var psychicLetter = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];
  
    if (userGuess === psychicLetter){
        Wins++;
        alert("you win!");
        guessesLeft = 9;
        guessesSoFar = [];
        
    }else if (guessesLeft == 0){
        Losses++
        guessesLeft = 9;
    }
    else{
        guessesLeft --;
        guessesSoFar.push(userGuess);
        yourGuess.textContent = guessesSoFar;
    }

    if (guessesLeft == 0){
        guessesSoFar = [];
    }

    if (userGuess === guessesSoFar){
        
    }

    // Display the user and computer guesses, and wins/losses/ties.
    
    guessesLeftText.textContent = guessesLeft;
    WinsText.textContent = Wins;
    LossesText.textContent = Losses;

}

guessesLeftText.textContent = guessesLeft;
WinsText.textContent = Wins;
LossesText.textContent = Losses;