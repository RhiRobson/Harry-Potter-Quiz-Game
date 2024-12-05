/*-------------------------------- Constants --------------------------------*/

let boxIndex;
let answer;
let box;

/*---------------------------- Variables (state) ----------------------------*/

let level = 1;
let question = 0;
let horcrux = 3;

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

const audio = document.getElementById('audio');

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
    const boxIndex = event.target.textContent;{
    if (boxIndex === harryPotterQuestions[question].correct && level !== 10) {
        questionElement.textContent = "Answer correct, 10 points to Gryffindor!!";
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
    } else if (boxIndex === harryPotterQuestions[question].correct && level === 10) {
        winGame(); 
    } else if (boxIndex !== harryPotterQuestions[question].correct && horcrux === 0) {
        looseGame(); 
    }}
}

const newLevel = () => {
    console.log("new level");
    question ++
    const questionText = harryPotterQuestions[question].question;
    const answersArray = harryPotterQuestions[question].answers;
    answerElements.forEach((element) => {
        element.disabled = false;
    })
    level ++
    levelElement.textContent = `Level: ${level}`;
    questionElement.textContent = questionText;
    console.log(answerElements)
    console.log(harryPotterQuestions)
    answerElements.forEach((box, index) => {
        box.textContent = answersArray[index];
    })
}

const winGame = () => {
    console.log("win")
    questionElement.textContent = "Congratulations you have won the House Cup!";
    answerElements.forEach((element) => {
        element.disabled = true;
    });
    nextQuestion.disabled = true;
    audioWin.play()
    return;
}

const looseGame = () => {
    questionElement.textContent = "No Horcruxes remain... Avada Kadavra!";
    answerElements.forEach((element) => {
        element.disabled = true;
    });
    nextQuestion.disabled = true;
    audioLoose.play();
    return;
}

const init = () => {
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
