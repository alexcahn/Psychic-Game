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
// Randomly chooses a choice from the lettersGuessed array.
var psychicLetter = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];
console.log(psychicLetter)


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    // function to restart the game
    function restart() {
        if ((userGuess === psychicLetter) ||
            (guessesLeft === 0));
        guessesLeft = 9;
        guessesSoFar = [];
        psychicLetter = lettersGuessed[Math.floor(Math.random() * lettersGuessed.length)];
        console.log(psychicLetter);
    }

    // if you guess a letter you've already guessed, it tell you that you've guessed it
    // if you guess a letter in the -1(not in the lettersGuessed array) there's an alert
    if (lettersGuessed.indexOf(userGuess) === -1) {
        alert("that's not a letter!");
        return false;
    }
    // if your guess is already in the index of your guesses so far
    if (guessesSoFar.indexOf(userGuess) >= 0) {
        alert("you already guessed that!");
        // if it's not a letter you've chosen, your guess will be pushed into the array of your guesses and you'll get -- guess left
    } else {
        guessesSoFar.push(userGuess);
        guessesLeft--;
    }
    //   if you guess the right letter
    if (userGuess === psychicLetter) {
        Wins++;
        alert("you win!");
        guessesLeft = 9;
        guessesSoFar = [];
        restart();

    } else if (guessesLeft === 0) {
        Losses++
        guessesLeft = 9;
        guessesSoFar = [];
        restart();
    }


    // Display the user and computer guesses, and wins/losses/ties.

    guessesLeftText.textContent = guessesLeft;
    WinsText.textContent = Wins;
    LossesText.textContent = Losses;
    yourGuess.textContent = guessesSoFar;

}

guessesLeftText.textContent = guessesLeft;
WinsText.textContent = Wins;
LossesText.textContent = Losses;