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
var scoreReader = document.getElementById("score-count")

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

//start game
//triggered event listener on start game button
//function to present hidden elements
startButton.addEventListener("click", function () {
   cardMain.classList.add("hide")
   card.classList.remove("hide")
   cardSection.classList.remove("hide")
});
//timer-setInterval-start timer-render to page
//load first question
startButton.addEventListener("click", function () {
    displayQuestion()
     var timeInterval = setInterval(function () {
        secondsLeft--;
        timerText.textContent = ("Seconds Left:" + secondsLeft);
        if(secondsLeft===0 || index > 4){
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
});

//render the question and multiple choices to the page

function displayQuestion(){
    answerResponse.textContent="";
    question.textContent = questions[index].question;
    buttonOne.textContent = questions[index].answers[0];
    buttonTwo.textContent = questions[index].answers[1];
    buttonThree.textContent = questions[index].answers[2];
    buttonFour.textContent = questions[index].answers[3];
};

//Check answer
//compare the choice with the correct answer 
//act on right or wrong answer
    //deduct 10 second for each incorrect answer
function nextQuestion(event){
    if (event.target.textContent===questions[index].correct){
        answerResponse.textContent="Correct!";
//score
        score++
        scoreReader.textContent= ("Score:" + score)
    } else {
        answerResponse.textContent="Incorrect!";
        secondsLeft= secondsLeft-10;
    }
    console.log(score)
    console.log(secondsLeft)
//Continue loading new questions
//currentquestion++
    setTimeout(function(){
    index++;
    displayQuestion()
 },500)
}
//check which button user clicked
buttonOne.addEventListener("click",nextQuestion)
buttonTwo.addEventListener("click",nextQuestion)
buttonThree.addEventListener("click",nextQuestion)
buttonFour.addEventListener("click",nextQuestion)

//endGame


function endGame(){

}

//called at end of timer or when current question> #of questions
  //if (secondsLeft===0);
//console.log("endGame");
  //}

//function stopTimer() {
  //  if (secondsLeft<0 || questions>4)
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
//make highscore visible
    //prompt to play again
    //quit