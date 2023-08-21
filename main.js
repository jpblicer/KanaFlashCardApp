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




let userScore = 0


function startApp(){

function startQuiz(){
  const possibleAnswers = [];
  let questionKana = hiragana[Math.floor(Math.random()*hiragana.length)];
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
      hiragana.splice(hiragana.indexOf(questionKana), 1); 
    }else{
      console.log("wrong answer")
      userScore--
      console.log(userScore)
      hiragana.splice(hiragana.indexOf(questionKana), 1);  
    }
  event.preventDefault()
  nextRound()
  removeSubmit()
  }

  activeSubmit() 

}


function nextRound(){
  if(hiragana.length <= 0){
    console.log("game over you scored " + userScore)
  }else{
  startQuiz()
}}

nextRound()

}

startApp()

