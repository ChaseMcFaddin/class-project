function sayHello(){
    console.log('Hello World!');
}

var sayHelloCookie = function(){
    console.log('Hello Bananas');
}


function sayHelloUser(name){
    console.log('Hello ' + name);
}

function addGreeting(){

var name = prompt('Hello! Before entering, what shall we call you?');

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening';
} else if (hourNow > 12) {
    greeting = 'Good afternoon';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome'
}
return document.write(greeting + ' ' + name + '!');
}

function addMonster(){
    var monster = prompt('What is your favorite type of monster? Dragon, unicorn, or maybe something else?');

var monsterAnswer;
if (monster == 'dragon'){
    monsterAnswer = ' Excellent choice! Dragons are the best!';
} else if (monster == 'unicorn'){
    monsterAnswer = 'Excellent choice! Unicorns are the cutest!';
} else {
    monsterAnswer = 'Eh, I guess those are ok too';
}

return document.write('You chose ' + monster + '. '+ monsterAnswer);

}

function addSeason(){
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

return document.write(seasonAnswer);
}


// I want a blue potion that gives me super strength.

function buildPotion(potionType, potionColor, potionEffect){
    var message = 'I want a ' + potionColor + potionType + ' that gives me super ' + potionEffect + '!'

    return message;
}


