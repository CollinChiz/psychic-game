var letters = [a, b, c, d, e, f, g, h, i, j, k, l, m, m, o, p, q, r, s, t, u, v, w, x, y, z]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = letters[Math.floor(math.random() * letters.length)];
    var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if(userOptions.indexof(userGuess) > -1) {
        if(userGuess === computerGuess) {
           wins++;
            guessesLeft = 9;
            guesses = [];
        }
        if(userGuess != computerGuess) {
            guessesLeft = --;
            guesses.push(userGuess);
        }
    }
}