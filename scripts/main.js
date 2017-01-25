"use strict";
//generate random whole number
const compNumber = Math.floor(Math.random() * 100) + 1;
//console log random number to watch
console.log(compNumber);
//generate some important variables and functions
let userNumbers = []; //fill this value with data from form
//let's access the form and get teh user-generated value
let mostRecentGuess = 0;
const feedackLocation = document.querySelector('.feedback');


//create function to test data-type of user-guess
// function dataTypeTest (guess) {
// }
//Decided to build this into the comparison function instead.

//create function to check for repeater options
function repeatCheck (guess) {
  let mostRecentGuess = userNumbers[userNumbers.length-1];
  for (let i=1; i < userNumbers.length; i++) {
    if (mostRecentGuess == userNumbers[i-1]) {
      alert("Don't smoke crack. You already guessed that.");
    }
  }

};

//create function to test length of userNumbers array (# of guesses)
function tooManyGuesses () {
   if (userNumbers.length >= 6) {
     document.querySelector('.computer-feedback').innerHTML = "<p>Sorry dude! Too many guesses and you lose!</p>" + "<img src='http://www.jatt007.com/wp-content/uploads/2015/11/Loser-SAY.jpg' alt='loser say what?'>";
    }
 };

 // comparison function (super rough draft)
 // might need to be a for loop (each time we hit the guess button, make a comparison, max 5 times)

//compare userGuess with ComputerGeneratedNumber and print to output
function compareUserComp () {
   let mostRecentGuess = userNumbers[userNumbers.length-1];
   if (compNumber < mostRecentGuess) {
     feedackLocation.innerHTML  = "guess lower";
     console.log("guess smaller");
   } else if (compNumber > mostRecentGuess) {
     feedackLocation.innerHTML  = "guess higher";
     console.log("guess bigger!");
   }  else if (Number.isNaN(mostRecentGuess) === true) {
     alert("That ain't no number chump!");
     feedackLocation.innerHTML = "an actual number, bruh."
   }  else {
        document.querySelector('.computer-feedback').innerHTML = "<p>Great job! You win!</p>" + "<img src='http://bit.ly/2ksaUBp' alt='man with money raining down'>";
       }
 };

//print user guess
function printGuess (guess) {
    document.querySelector('.you-guessed').innerHTML = guess;
}

//function to pull out the value of the number in the form field
function pullGuess (){
  const guess = Number(document.querySelector('#make-guess').value);
  //take value that's in the form field
  userNumbers.push(guess);
  //every time we make a guess, add it to the array of guesses
  //print the guesses
  printGuess(guess);
  //make sure we don't have a repeat guess
  repeatCheck();
  //make sure we don't have too many guesses
  tooManyGuesses();
  //if it's not a repeat, start comparing/checking for strings
  compareUserComp();
  //updat guesses left
  updateGuessesLeft();
  console.log(userNumbers)
};

function updateGuessesLeft () {
  let gsLft = userNumbers.length;
  for (let i=5; i<gsLft;i--) {
    document.querySelector('.guesses-left').innerHTML = gsLeft - i;
  }
};

//put an eventListener on the FORM, not a field
//Once you have user input, use it to run the above functions
const inputGuess = document.querySelector('.user-guess');
inputGuess.addEventListener('submit', () => {
  //prevent console.clear();
  event.preventDefault();
  pullGuess();


  inputGuess.reset();
});
