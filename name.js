var name = prompt('Stop! Who would enter this website must answer me these questions three, ere the other side he see.  What is your name?');

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
    greeting = 'Welcome!';
}

document.write(greeting + ' ' + name + '!');