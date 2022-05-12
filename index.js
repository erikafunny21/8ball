function generate_random(max_number) {
    return Math.floor(Math.random() * max_number);
}

let button = document.querySelector('button');
let answer = document.querySelector('#answer');
button.addEventListener('click', function() {
 
let randomNumber = generate_random(19);

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
else if (randomNumber == 3){
    answerText = "It is decidedly so"
}
else if (randomNumber == 4){
    answerText = "My sources say no"
}
else if (randomNumber == 5){
    answerText = "Now is a bad time"
}
else if (randomNumber == 6){
    answerText = "Concentrate and ask again"
}   
else if (randomNumber == 7){
    answerText = "My reply is no"
}
else if (randomNumber == 8){
    answerText = "Outlook not so good"
}
else if (randomNumber == 9){
    answerText = "Very doubtful"
}
else if (randomNumber == 10){
    answerText = "definitely"
}
else if (randomNumber == 11){
    answerText = "It is certain"
}
else if (randomNumber == 12){
    answerText = "It is decidedly so"
}
else if (randomNumber == 13){
    answerText = "Without a doubt"
}
else if (randomNumber == 14){
    answerText = "Cannot predict now"
}
else if (randomNumber == 15){
    answerText = "You may rely on it"
}
else if (randomNumber == 16){
    answerText = "As I see it, yes"
}
else if (randomNumber == 17){
    answerText = "Most likely"
}
else if (randomNumber == 18){
    answerText = "Outlook good"
}




else {
    answerText = " Ask again later";
}
answer.innerHTML = answerText;

















});
