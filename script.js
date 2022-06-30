const cardMain = document.querySelector(".cardMain");
var timerText = document.getElementById("timer-text");
var startTimer = document.getElementById("start-timer")
var secondsLeft = 180;
var score = 0;
var cardSection = document.getElementById("questionCard");
var initialsInput = document.getElementById("intials");
var submitButton = document.querySelector("#submit");
var letters = [];
var question = document.getElementById("actual-question");
var buttonOne = document.querySelector("#option-one");
var buttonTwo = document.querySelector("#option-two");
var buttonThree = document.querySelector("#option-three");
var buttonFour = document.querySelector("#option-four");
var card = document.querySelector("#cardDiv");
var answerResponse = document.getElementById("answer");
var index = 0;
//questions array
var questions = [
    {
        question: "Who said,'You've got to learn to leave the table when love is no longer being served.'",
        answers: ["Aretha Franklin", "Patsy Cline", "Nina Simone", "Judy Garland"],
        correct: "Nina Simone",

    },
    {
        question: "Who said, 'We tell ourselves stories in order to live.'",
        answers: ["Louise Erdrich", "Joan Didion", "Daphne Du Maurier", "Dani Shapiro"],
        correct: "Joan Didion",
    },
    {
        question: "Who said, 'It is about race if a person of color thinks it's about race.'",
        answers: ["Ijeoma Oluo", "Aja Barber", "Mishna Wolff", "Anna North"],
        correct: "Ijeoma Oluo",
    },
    {
        question: "Who said, 'Courage is the price that life exacts for granting peace.'",
        answers: ["Mae West", "Annie Oakley", "Amelia Earhart", "Michelle Obama"],
        correct: "Amelia Earhart",
    },
    {
        question: "Who said, 'It's in the act of having to do things that you don't want to that you learn something about moving past the self. Past the ego.'",
        answers: ["Angela Davis", "Bell Hooks", "Dolores Huerta", "Gloria Steinam"],
        correct: "Bell Hooks",
    },
]

//console log examples console
//log(questions[0].answers[2])
//console.log(card)
//console.log(card.children)
//currentQuestion=0
//timeleft
//score
//query select for button

//start game
//triggered event listener on start game button
startButton.addEventListener("click", function () {
   cardMain.classList.add("hide")
   card.classList.remove("hide")
   cardSection.classList.remove("hide")
});
//timer-setInterval-start timer-render to page
startButton.addEventListener("click", function () {
    displayQuestion()
    setInterval(function () {
        secondsLeft--;
        timerText.textContent = ("Seconds Left:" + secondsLeft);
    }, 1000);
});

//set-up first question
//load question
function displayQuestion (){
    answerResponse.textContent=""
    question.textContent = questions[index].question
    buttonOne.textContent = questions[index].answers[0]
    buttonTwo.textContent = questions[index].answers[1]
    buttonThree.textContent = questions[index].answers[2]
    buttonFour.textContent = questions[index].answers[3]
}
function nextQuestion(event){
    if (event.target.textContent===questions[index].correct){
        answerResponse.textContent="Correct!"
    } else { 
        answerResponse.textContent="Incorrect!"
    }
    setTimeout(function(){
        index++
        displayQuestion()
    },500)
}

buttonOne.addEventListener("click",nextQuestion)
buttonTwo.addEventListener("click",nextQuestion)
buttonThree.addEventListener("click",nextQuestion)
buttonFour.addEventListener("click",nextQuestion)




//question.textContent = JSONstringify(questions[0]);

//Continue loading new questions
//currentquestion++
//render the question and multiple choices to the page
//btn1.textContent=


//Check answer
//check which button user clicked
//compare the choice with the correct answer 
//act on right or wrong answer
//score
    //var score = 0;
    //for (var i=0, i <questions.length; i++){
    //var response = window.prompt(questions[i].prompt);
    //if(response== question[i}.answer]){
    //score++;
    //answerResponse.textContent = ("Correct!")
    //}else {
    //answerResponse.textContent = ("Incorrect!")
    //}
    //}
    //}
//loadQuestion()

//endGame
//called at end of timer or when current question> #of questions
//cancel timer
//prompt for user initials
// function finalInitials () {
//     localStorage.setItem("initials",(letters));
// submitButton.addEventListener("click", function(event) {
//     event.preventDefault();
        
//         var initials = initialsInput.value.trim();
//         //local storage
//         storeletters();
// })
// };
        //1. read initials and store in js variable
            //2. check if null
            //3. update js variable with our new score
            //4. render to page
            //5. save updated js variable to ls
    //make highscore visible
    //prompt to play again
