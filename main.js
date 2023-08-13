/*

Consider setting the answerX.value under answerX.sound on lines 55-57

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
  

const form = document.getElementById("form")
const questionMoji = document.getElementById("questionMoji");
const answers = document.getElementsByName("answers");
const answerA = document.getElementById("answerALabel");
const answerB = document.getElementById("answerBLabel");
const answerC = document.getElementById("answerCLabel");
const answerD = document.getElementById("answerDLabel");
let userScore = 0

const possibleAnswers = [];


function shuffleAnswers(possibleAnswers){
  for(let i = possibleAnswers.length - 1; i>0; i--){
    const j = Math.floor(Math.random() *(i + 1));
    [possibleAnswers[i], possibleAnswers[j]] = [possibleAnswers[j], possibleAnswers[i]];
  }
  let shuffledAnswers = possibleAnswers;
  displayAnswers(shuffledAnswers)
}


function formQuestion(){
  let questionKana = hiragana[Math.floor(Math.random()*hiragana.length)];
  answerB.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
  answerC.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;  
  answerD.sound = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
    
  possibleAnswers.push(questionKana.sound, answerB.sound, answerC.sound, answerD.sound)
  shuffleAnswers(possibleAnswers)
  questionMoji.textContent = questionKana.moji


  form.addEventListener("submit", event => {
    let userKana = (form.elements["answers"].value);
    console.log(userKana)

    if (questionKana.sound === "a"){
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
  })

}

function displayAnswers(shuffledAnswers){
  answerA.textContent = shuffledAnswers[0]
  answerB.textContent = shuffledAnswers[1]
  answerC.textContent = shuffledAnswers[2]
  answerD.textContent = shuffledAnswers[3]
}

formQuestion()
  