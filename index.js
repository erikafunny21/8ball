function generate_random(max_number) {
    return Math.floor(Math.random() * max_number);
}

let button = document.querySelector('button');
let answer = document.querySelector('#answer');
button.addEventListener('click', function() {
 
let randomNumber = generate_random(5);

let answerText = "";

if (randomNumber == 0) {
    answerText = "It is certain";
}
else if (randomNumber == 1) {
    answerText = "No";
}
else if (randomNumber == 2) {
    answerText = "Yes";
}
else {
    answerText = " Ask again later";
}
answer.innerHTML = answerText;

});
