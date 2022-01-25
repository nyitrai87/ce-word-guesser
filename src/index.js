const body = document.getElementById("body");
const word = document.getElementById("word");
const remaining = document.getElementById("remaining");
const wrongLettersDiv = document.getElementById("wrong-letters");

const words = [
    'lover',
    'viral',
    'fatal',
    'vital',
    'ready',
    'point',
    'drink',
    'abbey',
    'solar',
    'frank',
    'brute',
    'words',
    'panic',
    'final',
    'labor',
    'favor',
    'funky',
    'shire',
    'bored',
    'grape',
    'nyiti',
    'bobby'
]

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let remainingGuesses = 6;
let wordToGuess = random(words);
let wrongLetters = [];
remaining.textContent = `Remaining guesses: ${remainingGuesses}`;

function playingGame (event) {
    let key = event.key;
    if (key >= "a" && key <= "z") {
        remainingGuesses--;
        if(word.textContent.includes(key) || wrongLetters.includes(` ${key}`)) {
            remainingGuesses++;
            alert("You already guessed this letter!");
            let index = wrongLetters.indexOf(` ${key}`);
            if(index > -1) {
                wrongLetters.splice(index, 1);
            }
        }
        remaining.textContent = `Remaining guesses: ${remainingGuesses}`;
        if (!wordToGuess.includes(key)) {
            wrongLetters.push(` ${key}`);
            wrongLettersDiv.textContent = `Wrong letters:${wrongLetters}`;
        }
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === key) {
                let splittedWord = word.textContent.split("");
                splittedWord[i] = key;
                word.textContent = splittedWord.join("");
                if (word.textContent === wordToGuess) {
                    word.style.color = "green";
                    window.removeEventListener("keyup", playingGame);
                }
            }
        }
        if (remainingGuesses === 0 && word.textContent !== wordToGuess) {
            word.textContent = wordToGuess;
            word.style.color = "red";
            window.removeEventListener("keyup", playingGame);
        }
    }
}

window.addEventListener("keyup", playingGame);
