/* Pseudocode for Quizgame
1. Set up game home page - complete
2.Set up game rules to show when you click on Gmae rules buttom -complete
3.link question info - complete
4.link answers to boxes - complete
5. Set up clicker
6.link level info
7.link lives info
8.Set up loop for game play
    - page loads question
    - player clicks anser
    - if correct move to next question
    - if incorrect loose life and move to next quetion
    - if you loose all your lives you loose the game
    - if you reach level 10 with all of your lives you win
*/


/*-------------------------------- Constants --------------------------------*/

let boxIndex;

/*---------------------------- Variables (state) ----------------------------*/

let level = 1;
let question = 0;
let horcrux = 3;
let answer;
let box;
let winner;

/*------------------------ Cached Element References ------------------------*/

//button info
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

//level and horcruxes
const levelElement = document.querySelector("#messageLevel");
//console.log(levelElement)

const horcruxElement = document.querySelector("#messageHorcrux");
//console.log(horcruxElement)

//questions
const questionText = harryPotterQuestions[question].question;
//console.log(questionText)
const questionElement = document.querySelector("#question");
//console.log(questionElement)

//answers
const answersArray = harryPotterQuestions[question].answers;
//console.log(answersArray)
const answerElements = document.querySelectorAll(".box");
//console.log(answerElements)


/*-------------------------------- Functions --------------------------------*/

//question info:
questionElement.textContent = questionText;

//answer info:
answerElements.forEach((box, index) => {
    box.textContent = answersArray[index];
})

//level info:
levelElement.textContent = `Level: ${level}`

//horcrux info:
horcruxElement.textContent = `Horcruxes: ${horcrux}`

//turn method
const chooseAnswer = (event) => {
    console.log(event);
    const boxIndex = event.target.textContent;{
    if (boxIndex === harryPotterQuestions[question].correct) {
        questionElement.textContent = "Answer correct, you move up a level!";
        level ++
        levelElement.textContent = `Level: ${level}`;
        answerElements.forEach((element) => {
            element.disabled = true;
        })
        return levelElement.textContent;
    } else if (boxIndex !== harryPotterQuestions[question].correct && horcrux >= 1) {
        questionElement.textContent = "Answer incorrect, you loose a Horcrux!";
        horcrux --
        horcruxElement.textContent =`Horcruxes: ${horcrux}`;
        answerElements.forEach((element) => {
            element.disabled = true;
        })
        return levelElement.textContent;
    } else {
        looseGame()
    }}
    
}

const newLevel = () => {
    console.log("new level")
    question ++
    answerElements.forEach((element) => {
        element.disabled = false;
    })
    chooseAnswer()
}

const render = () => {

}

const looseGame = () => {
    return questionElement.textContent = "No Horcruxes remain... Avada Kadavra!";
    // play audio??
    return;
}

const init = () => {
    //console.log("init");
    render();
    //updatehorcrux();
    //updatelevel();
}
init()

/*----------------------------- Event Listeners -----------------------------*/

//Button listeners
showButton.addEventListener("click", () => {
    dialog.showModal();
    console.log("button click")
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  }); 


//Click on answers

answerElements.forEach((box) => {
    box.addEventListener("click", chooseAnswer)
})

//Next Question

nextQuestion.addEventListener("click", newLevel);