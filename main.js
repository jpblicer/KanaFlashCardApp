/*
TO DO:
-Calculate score as total of ramining hiragana
-Display result screen showing number corrent and reload button to start over

create another array to pull the question moji from and then have the other answeres pulled from original array
  this will avoid having fewer random answers as quiz progresses
*/


const hiragana = [
  {
    moji: "あ",
    sound: "a"
  },
  {
    moji: "い",
    sound: "i"
  },
  {
    moji: "う",
    sound: "u"
  },
  {
    moji: "え",
    sound: "e"
  },
  {
    moji: "お",
    sound: "o"
  }
];

let startButton = document.createElement("button");
startButton.type = "button"
const playField = document.getElementById("playField")
const form = document.getElementById("form")
const formButton = document.getElementById("formButton")

const questionMoji = document.getElementById("questionMoji");
const answers = document.getElementsByName("answers");
const answerAInput = document.getElementById("answerA")
const answerBInput = document.getElementById("answerB")
const answerCInput = document.getElementById("answerC")
const answerDInput = document.getElementById("answerD")
const answerA = document.getElementById("answerALabel");
const answerB = document.getElementById("answerBLabel");
const answerC = document.getElementById("answerCLabel");
const answerD = document.getElementById("answerDLabel");


let questionHiragana =[]

let userScore = 0

hiragana.forEach(element => {
  questionHiragana.push(element)
});


function startApp(){

function startQuiz(){
  const possibleAnswers = [];
  let questionKana = questionHiragana[Math.floor(Math.random()*questionHiragana.length)];
  answerB.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
  answerC.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;  
  answerD.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
  possibleAnswers.push(questionKana.sound, answerB.sound, answerC.sound, answerD.sound)

  shuffleAnswers(possibleAnswers, questionKana)
}

function shuffleAnswers(possibleAnswers, questionKana){
  for(let i = possibleAnswers.length - 1; i>0; i--){
    const j = Math.floor(Math.random() *(i + 1));
    [possibleAnswers[i], possibleAnswers[j]] = [possibleAnswers[j], possibleAnswers[i]];
  }

  displayQuestion(possibleAnswers, questionKana)
}


function displayQuestion(possibleAnswers, questionKana){
  questionMoji.textContent = questionKana.moji
  answerA.textContent = possibleAnswers[0]
  answerAInput.value = answerA.textContent
  answerB.textContent = possibleAnswers[1]
  answerBInput.value = answerB.textContent
  answerC.textContent = possibleAnswers[2]
  answerCInput.value = answerC.textContent
  answerD.textContent = possibleAnswers[3]
  answerDInput.value = answerD.textContent
  
  function activeSubmit(){
    form.addEventListener("submit", questionResult);
  };

  function  removeSubmit(){
    form.removeEventListener("submit", questionResult);
  };
  
  const questionResult = (event) => {
    let userKana = document.querySelector('input[name="answers"]:checked').value

    if(questionKana.sound === userKana){
      console.log("right answer")
      userScore++
      console.log(userScore)
      questionHiragana.splice(questionHiragana.indexOf(questionKana), 1); 
    }else{
      console.log("wrong answer")
      userScore--
      console.log(userScore)
      questionHiragana.splice(questionHiragana.indexOf(questionKana), 1);  
    }
  event.preventDefault()
  nextRound()
  removeSubmit()
  }

  activeSubmit() 

}


function nextRound(){
  if(questionHiragana.length <= 0){
    console.log("game over you scored " + userScore)
  }else{
  startQuiz()
}}

nextRound()

}


function hideQuiz(){
  for (const child of document.querySelectorAll("ul"))(
    child.setAttribute("hidden", true)
  )
}

function showQuiz(){
  for (const child of document.querySelectorAll("ul"))(
    child.removeAttribute("hidden")
  )
  startButton.setAttribute("hidden", true)
  startApp()
}

function startScreen(){
  questionMoji.textContent="Select an Option"
  hideQuiz()
  
  startButton.textContent = "Start Game"
  
  
  
  document.querySelector("fieldset").append(startButton)
  startButton.addEventListener("click", showQuiz)
}

startScreen()