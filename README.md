# Word Guesser Game

## The Task
Your task is to implement a simple static website on which a user can play a game of word guessing.
Check out the designs in the `design` folder to give you an idea. It's almost like [Hangman](https://en.wikipedia.org/wiki/Hangman_(game)).

## Details
* The player is presented with the word to be guessed represented as underscores (`_`) for each character, 
an input field where they can only enter 1 character and a message informing the player 
the remaining guesses.
* A player can guess a letter by entering it into the input box and pressing Enter. Pressing Enter while no value is in the input box does not count as a guess.
* If the player is out of guesses, the input field becomes disabled and the word is shown in red.
* If the player guesses every letter before they run out of guesses then the input field becomes disabled and the word is shown in green.
* The game must choose a word randomly from the following list:
```javascript
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
```

## How to submit your solution?
1. Fork this repository to your own GitHub profile. Click on the "Fork" button on GitHub in the repository's upper right corner.
2. Clone the forked repository to your workstation
3. Create a branch (you can name it anything you like) and switch to it
4. Implement your solution, commit frequently and push the solution
5. Open a pull request to your `main` branch

## Testing your code
You can open the index.html in any browser to test your code. You can also open a browser via your editor (e.g. VSCode).
