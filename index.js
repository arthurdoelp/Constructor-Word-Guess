//I got really close. I got stuck on creating the recursion for the inquire prompts and I did not get around to developing the game theory of wins and losses or letters guessed or guesses left.
//I was able to display the array of underscores and create a prompt and have the javascript go through a series of consutrctors to filter out any matches and change the respective letter that matches in the array of letters of a ranomdly chosen word.
//I think this was the hardest aspect and I am happy with how much I was able to accomplish. I am very glad I was able to figure out both letter.js and word.js. I think if I had another day or two I could figure out index.js as well.

// * Randomly selects a word and uses the `Word` constructor to store it

// * Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word.js");
//var Letter = require("./letter.js");
//var letter = "a";

var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
  "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];

  function startGame() {
    // Reset the guesses back to 0.
    numGuesses = 9;
  
    // Solution is chosen randomly from wordList.
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    // The word is broken into individual letters.
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
  
    // We print the solution in console (for testing).
    console.log(chosenWord);
  
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
  
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
  

    // Print the initial blanks in console.
    console.log(blanksAndSuccesses);

    var askQuestion = function() {
        if(lettersInChosenWord !== blanksAndSuccesses) {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Guess a letter!",
                    name: "question"
                }
            ])
            .then(function(response) {
                //console.log(response.question);
                var newWord = new Word(lettersInChosenWord, response.question);
                //blanksAndSuccesses.push(response.question);
                newWord.letterString();
        
        
                // If the letter exists somewhere in the word, then figure out exactly where (which indices).
      //if (newWord.guess() === true) {
    
        // Loop through the word.
        for (var j = 0; j < numBlanks; j++) {
    
          // Populate the blanksAndSuccesses with every instance of the letter.
          if (chosenWord[j] === response.question) {
            // Here we set the specific space in blanks and letter equal to the letter when there is a match.
            blanksAndSuccesses[j] = response.question;
            //console.log("Correct!!");
          }
          else {
              //console.log("Incorrect");
          }
        }
        // Logging for testing.
        console.log(blanksAndSuccesses);
      //}

    });

    }

    }
    askQuestion();
    }

startGame();








