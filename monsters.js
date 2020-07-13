var colour = prompt('What is your favorite colour?');

var colorAnswer;
if (colour == 'green'){
    colorAnswer = '  You are correct, you may pass!';
} else if (colour == 'blue'){
    colorAnswer = '  You are correct, you may pass!';
} else {
    colorAnswer = '  Incorrect!  You should be cast into the Gorge of Eternal Peril, but you may pass anyway because I don\'t have a script for that';
}

document.write('You\'re favorite color is ' + colour + '.  ' + colorAnswer);