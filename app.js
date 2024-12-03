/* Pseudocode for Quizgame
1. Set up game home page
2.Set up game rules to show when you click on Gmae rules buttom
3.link level info
4.link lives info
5.link question info
6.link answers to boxes
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

let lives;

let question;

let answer;

let options;

/*------------------------ Cached Element References ------------------------*/

//button info
const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#dialog + button");
const closeButton = document.querySelector("#dialog button");

//levels and lives
const messageLevelElement = document.querySelectorAll("#messageLevel")

const messageLivesElement = document.querySelectorAll("#messageLives")

//questions
const questionsElement = document.querySelectorAll("#questions")

/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
/*showButton.addEventListener("click", () => {
    dialog.showModal();
    console.log("button click")
  });

closeButton.addEventListener("click", () => {
    dialog.close();
  }); 
  */


