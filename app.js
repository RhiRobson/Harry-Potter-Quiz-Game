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

let level;

let horcrux;

let answer;

let box;

let winner;

let correct;

let incorrect;

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


//turn method
const chooseAnswer = (event) => {
    //console.log(event);
    const boxIndex = event.target.textContent;
    if (boxIndex === harryPotterQuestions[0].correct0) {
        return questionElement.textContent = "Answer correct, you move up a level!";
        return horcruxElement.textContent = `Horcrux: ${horcrux}`;
        return levelElement.textContent = `Level: ${level++}`;
    } else if (boxIndex !== harryPotterQuestions[0].correct0 && horcrux > 1) {
        return questionElement.textContent = "Answer incorrect, you loose a Horcrux!";
        return horcruxElement.textContent =`Horcrux: ${horcrux--}`;
        return levelElement.textContent = `Level: ${level++}`;
        return levelElement.textContent =`Level: ${level}`;
    } else {
        looseGame()
    }
    
}

const render = () => {

}

const looseGame = () => {

}

const init = () => {
    //console.log("init");
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


//Click on answers

answerElements.forEach((box) => {
    box.addEventListener('click', chooseAnswer)
})