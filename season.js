var season = prompt('What is your favorite season of the year?');

var seasonAnswer;
if (season == 'spring'){
    seasonAnswer = ' Spring! The Unicorns love running through spring time flowers as well!';
} else if (season == 'summer'){
    seasonAnswer = 'Summer! Nothing says summer like a troll underneath a forest bridge!';
} else if (season == 'fall'){
    seasonAnswer = 'Fall! Werewolves love fall and football too!';
} else if (season == 'winter'){
    seasonAnswer = 'Winter! Why? Nobody actually likes the cold!';
} else {
    seasonAnswer = 'That\'s not a season silly';
}

document.write(seasonAnswer);