/* Pseudocode for Quizgame
1. Set up game home page - complete
2.Set up game rules to show when you click on Gmae rules buttom -complete
5.link question info - complete
6.link answers to boxes - complete
3.link level info
4.link lives info
7.Set up loop for game play
    - page loads question
    - player clicks anser
    - if correct move to next question
    - if incorrect loose life and move to next quetion
    - if you loose all your lives you loose the game
    - if you reach level 10 with all of your lives you win
*/


/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let level;

let horcrux;

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
const questionText = harryPotterQuestions[0].question0;
//console.log(questionText)
const questionElement = document.querySelector("#question");
//console.log(questionElement)

//answers
const answersArray = harryPotterQuestions[0].answers0;
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



const render = () => {

}

const init = () => {
    console.log("init");
    level = 1;
    horcrux = 3;
    winner = false;
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



