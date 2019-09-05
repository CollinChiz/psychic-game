// 1. press key
// 2. computer generates letter key
// 3. if letters match add win and reset
// 4. if letters dont match log event key and subtract from guesses
// 5. when run out of guesses add loss and reset guesses and guesses left
// 6. log all of it onto page
    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessSoFar = [];

    document.onkeyup = function(event) {
        var userGuess = event.key;
        var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        if(letters.indexOf(userGuess) > -1) {
            if(userGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                guessSoFar = [];   
            }
            if(userGuess != computerGuess) {
                guessSoFar.push(userGuess); 
                guessesLeft --;
            }
            if(guessesLeft === 0) {
                losses ++;
                guessesLeft = 9;
                guessSoFar = [];
            }
            console.log(wins, losses, guessesLeft, guessSoFar);
            var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Guesses so far: " + guessSoFar.join(", ") + "</p>";

            document.querySelector("#game").innerHTML = html; 
            
        }
    };   
    
