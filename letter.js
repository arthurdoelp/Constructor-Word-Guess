// * A string value to store the underlying character for the letter

// * A boolean value that stores whether that letter has been guessed yet

// * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

// * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


function Letter(hiddenChar, letter) {
    this.hiddenChar = hiddenChar;
    this.letterInWord = false;
    this.toString = function() {
        if (letter === hiddenChar) {
            hiddenChar = letter;
        }
        else {
            hiddenChar = "_";
        }

      return hiddenChar;

    }

    this.guess = function() {
        if (letter === hiddenChar) {
            letterInWord = true;
            console.log(hiddenChar + " " + letter);
            console.log(letterInWord);
        }
        else {
            letterInWord = false;
            console.log(hiddenChar + " " + letter);
            console.log(letterInWord);
        }
    }
}

// var newLetter = new Letter("a", "a");
// newLetter.guess();

module.exports = Letter;