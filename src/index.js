const body = document.getElementById("body");
const input = document.getElementById("letter-input");
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

input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        if (input.value !== "") {
            remainingGuesses--;
            remaining.textContent = `Remaining guesses: ${remainingGuesses}`;
            if (!wordToGuess.includes(input.value)) {
                wrongLetters.push(` ${input.value}`);
            }
            for (let i = 0; i < wordToGuess.length; i++) {
                if (wordToGuess[i] === input.value) {
                    let splittedWord = word.textContent.split("");
                    splittedWord[i] = input.value;
                    word.textContent = splittedWord.join("");
                    if (word.textContent === wordToGuess) {
                        word.style.color = "green";
                        input.disabled = true;
                    }
                }
            }
            if (remainingGuesses === 0 && word.textContent !== wordToGuess) {
                word.textContent = wordToGuess;
                word.style.color = "red";
                input.disabled = true;
            }
            input.value = "";
            wrongLettersDiv.textContent = `Wrong letters:${wrongLetters}`;
        }
    }
});
