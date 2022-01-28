const body = document.getElementById("body");
const word = document.getElementById("word");
const remaining = document.getElementById("remaining");
const wrongLettersDiv = document.getElementById("wrong-letters");

function restartGame() {
    let restartButton = document.createElement("button");
    restartButton.id = "restart-button";
    restartButton.textContent = "Restart game";
    restartButton.addEventListener("click", function () {
        window.location.reload();
    })
    body.append(restartButton);
}

let remainingGuesses = 6;
let wrongLetters = [];
remaining.textContent = `Remaining guesses: ${remainingGuesses}`;

function playingGame(event) {
    let key = event.key;
    if (key < "a" || key > "z") {
        return;
    }

    if (word.textContent.includes(key) || wrongLetters.includes(key)) {
        alert("You already guessed this letter!");
        return;
    }

    remainingGuesses--;
    remaining.textContent = `Remaining guesses: ${remainingGuesses}`;

    fetch(`/guess/${key}`)
        .then(res => res.json())
        .then(indices => {
            if (indices.length === 0) {
                wrongLetters.push(key);
                wrongLettersDiv.textContent = `Wrong letters:${wrongLetters.map((letter) => " " + letter)}`;
            }

            for (let i = 0; i < indices.length; i++) {
                let splittedWord = word.textContent.split("");
                splittedWord[indices[i]] = key;
                word.textContent = splittedWord.join("");
                if (!word.textContent.includes("_")) {
                    word.style.color = "green";
                    window.removeEventListener("keyup", playingGame);
                    restartGame();
                }
            }

            if (remainingGuesses === 0 && word.textContent.includes("_")) {
                //word.textContent = wordToGuess;
                word.style.color = "red";
                window.removeEventListener("keyup", playingGame);
                restartGame();
            }
        })
}

window.addEventListener("keyup", playingGame);
