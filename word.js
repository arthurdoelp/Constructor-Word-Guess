// * An array of `new` Letter objects representing the letters of the underlying word

// * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

// * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require("./letter.js");
var arr = [];
var totalArr = "";

function Word(letterArr, letter) {
    this.letterArr = function() {
        for (var i = 0; i < letterArr.length; i++) {
            var arrLetters = new Letter(letterArr[i], letter);
            arr.push(arrLetters);
        }
        //console.log(arr);
    }

    this.letterString = function() {
        this.letterArr();
        for (var i = 0; i < arr.length; i++) {
            
            totalArr += arr[i].toString();

        }
        console.log(totalArr);
        //return totalArr;

    };
    this.guess = function() {
        this.letterArr();
        for (var i = 0; i < arr.length; i++) {
            var isGuess = arr[i].guess();
        }
        console.log(isGuess);
        return isGuess;
    };
};

// var newWord = new Word(["b", "a", "r", "t"], "t");
// newWord.guess();

module.exports = Word;