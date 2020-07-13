var monster = prompt('What is your favorite type of monster? Dragon, unicorn, or maybe something else?');

var monsterAnswer;
if (monster == 'dragon'){
    monsterAnswer = ' Excellent choice! Dragons are the best!';
} else if (monster == 'unicorn'){
    monsterAnswer = 'Excellent choice! Unicorns are the cutest!';
} else {
    monsterAnswer = 'Eh, I guess those are ok too';
}

document.write('You chose ' + monster + '. '+ monsterAnswer);







