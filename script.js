const randomNumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + ' ';
  
  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congrats! You got it Right!!';
    lastResult.style.background = 'green';
    lastResult.style.fontSize = '200%';
    lastResult.style.padding = '10px';
    lastResult.style.boxShadow = '3px 3px 6px black';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = " Game Over!! ";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!!";
    lastResult.style.background = "red";
    lastResult.style.fontSize = '200%';
    lastResult.style.padding = '10px';
    lastResult.style.boxShadow = '3px 3px 6px black';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = ' Last Guess was too Low';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last Guess was too High";
    }
  }
  
  guessCount++;
  guessField.value = "";
  guessField.focus();
  
  
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 1; i < resetParas.length; i++) {
        resetParas[i].textConent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style = "none";

    randomNumber = Math.floor(Math.random() * 100) +1;

}