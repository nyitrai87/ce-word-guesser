const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.use(express.static(path.join(__dirname, "public")));

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

let wordToGuess = random(words);

app.get("/guess/:letter", (req, res) => {
    const letter = req.params.letter;
    const indices = [];
    for(let i = 0; i < wordToGuess.length; i++) {
        if(letter === wordToGuess[i]) {
            indices.push(i);
        }
    }
    res.json(indices);
});











app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});