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
  },
  {
    moji: "か",
    sound: "ka"
  },
  {
    moji: "き",
    sound: "ki"
  },
  {
    moji: "く",
    sound: "ku"
  },
  {
    moji: "け",
    sound: "ke"
  },
  {
    moji: "こ",
    sound: "ko"
  },
  {
    moji: "さ",
    sound: "sa"
  },
  {
    moji: "し",
    sound: "shi"
  },
  {
    moji: "す",
    sound: "su"
  },
  {
    moji: "せ",
    sound: "se"
  },
  {
    moji: "そ",
    sound: "so"
  },
  {
    moji: "た",
    sound: "ta"
  },
  {
    moji: "ち",
    sound: "chi"
  },
  {
    moji: "つ",
    sound: "tsu"
  },
  {
    moji: "て",
    sound: "te"
  },
  {
    moji: "と",
    sound: "to"
  },
  {
    moji: "な",
    sound: "na"
  },
  {
    moji: "に",
    sound: "ni"
  },
  {
    moji: "ぬ",
    sound: "nu"
  },
  {
    moji: "ね",
    sound: "ne"
  },
  {
    moji: "の",
    sound: "no"
  },
  {
    moji: "は",
    sound: "ha"
  },
  {
    moji: "ひ",
    sound: "hi"
  },
  {
    moji: "ふ",
    sound: "fu"
  },
  {
    moji: "へ",
    sound: "he"
  },
  {
    moji: "ほ",
    sound: "ho"
  },
  {
    moji: "ま",
    sound: "ma"
  },
  {
    moji: "み",
    sound: "mi"
  },
  {
    moji: "む",
    sound: "mu"
  },
  {
    moji: "め",
    sound: "me"
  },
  {
    moji: "も",
    sound: "mo"
  },
  {
    moji: "や",
    sound: "ya"
  },
  {
    moji: "ゆ",
    sound: "yu"
  },
  {
    moji: "よ",
    sound: "yo"
  },
  {
    moji: "ら",
    sound: "ra"
  },
  {
    moji: "り",
    sound: "ri"
  },
  {
    moji: "る",
    sound: "ru"
  },
  {
    moji: "れ",
    sound: "re"
  },
  {
    moji: "ろ",
    sound: "ro"
  },
  {
    moji: "わ",
    sound: "wa"
  },
  {
    moji: "ん",
    sound: "n"
  },
  {
    moji: "を",
    sound: "wo"
  }
];


const katakana = [
  {
    moji: "ア",
    sound: "a"
  },
  {
    moji: "イ",
    sound: "i"
  },
  {
    moji: "ウ",
    sound: "u"
  },
  {
    moji: "エ",
    sound: "e"
  },
  {
    moji: "オ",
    sound: "o"
  },
  {
    moji: "カ",
    sound: "ka"
  },
  {
    moji: "キ",
    sound: "ki"
  },
  {
    moji: "ク",
    sound: "ku"
  },
  {
    moji: "ケ",
    sound: "ke"
  },
  {
    moji: "コ",
    sound: "ko"
  },
  {
    moji: "サ",
    sound: "sa"
  },
  {
    moji: "シ",
    sound: "shi"
  },
  {
    moji: "ス",
    sound: "su"
  },
  {
    moji: "セ",
    sound: "se"
  },
  {
    moji: "ソ",
    sound: "so"
  },
  {
    moji: "タ",
    sound: "ta"
  },
  {
    moji: "チ",
    sound: "chi"
  },
  {
    moji: "ツ",
    sound: "tsu"
  },
  {
    moji: "テ",
    sound: "te"
  },
  {
    moji: "ト",
    sound: "to"
  },
  {
    moji: "ナ",
    sound: "na"
  },
  {
    moji: "ニ",
    sound: "ni"
  },
  {
    moji: "ヌ",
    sound: "nu"
  },
  {
    moji: "ネ",
    sound: "ne"
  },
  {
    moji: "ノ",
    sound: "no"
  },
  {
    moji: "ハ",
    sound: "ha"
  },
  {
    moji: "ヒ",
    sound: "hi"
  },
  {
    moji: "フ",
    sound: "fu"
  },
  {
    moji: "へ",
    sound: "he"
  },
  {
    moji: "ホ",
    sound: "ho"
  },
  {
    moji: "マ",
    sound: "ma"
  },
  {
    moji: "ミ",
    sound: "mi"
  },
  {
    moji: "ム",
    sound: "mu"
  },
  {
    moji: "メ",
    sound: "me"
  },
  {
    moji: "モ",
    sound: "mo"
  },
  {
    moji: "ヤ",
    sound: "ya"
  },
  {
    moji: "ユ",
    sound: "yu"
  },
  {
    moji: "ヨ",
    sound: "yo"
  },
  {
    moji: "ラ",
    sound: "ra"
  },
  {
    moji: "リ",
    sound: "ri"
  },
  {
    moji: "ル",
    sound: "ru"
  },
  {
    moji: "レ",
    sound: "re"
  },
  {
    moji: "ロ",
    sound: "ro"
  },
  {
    moji: "ワ",
    sound: "wa"
  },
  {
    moji: "ン",
    sound: "n"
  },
  {
    moji: "ヲ",
    sound: "wo"
  }
];







let hiraganaStartButton = document.createElement("button");
hiraganaStartButton.type = "button"

let katakanaStartButton = document.createElement("button");
katakanaStartButton.type = "button"

let allKanaStartButton = document.createElement("button");
allKanaStartButton.type = "button"

let resetButton = document.createElement("button");
resetButton.type = "button"
resetButton.textContent = "Reset"

const playField = document.getElementById("playField")
const form = document.getElementById("form")
const formButton = document.getElementById("formButton")
const header = document.querySelector("header")
const stats = document.getElementById("stats")
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


const roundKana = [];

const selectedKana = []



function startApp(){

function startQuiz(){
  const possibleAnswers = [];
  let questionKana = selectedKana[Math.floor(Math.random()*selectedKana.length)];
  answerB.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;
  answerC.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;  
  answerD.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;

  while(answerB.sound === answerC.sound || answerB.sound === answerD.sound || answerB.sound === questionKana.sound){
    answerB.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;
  }
  while(answerC.sound === answerB.sound || answerC.sound === answerD.sound || answerC.sound === questionKana.sound){
    answerC.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;  
  }
  while(answerD.sound === answerB.sound || answerD.sound === answerC.sound || answerD.sound === questionKana.sound){
    answerD.sound = roundKana[Math.floor(Math.random()*roundKana.length)].sound;
  }
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
      correctHeader()
      console.log(userScore)
      selectedKana.splice(selectedKana.indexOf(questionKana), 1); 
    }else{
      console.log("wrong answer")
      console.log(userScore)
      wrongHeader()
      selectedKana.splice(selectedKana.indexOf(questionKana), 1);  
    }
  
  event.preventDefault()
  nextRound()
  removeSubmit()
  }

  activeSubmit() 

}


function nextRound(){
  if(selectedKana.length <= 0){
    console.log("game over you scored " + userScore)
    quizResult()
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
  hiraganaStartButton.setAttribute("hidden", true)
  katakanaStartButton.setAttribute("hidden", true)
  allKanaStartButton.setAttribute("hidden", true)
  startApp()
}




function startScreen(){
  questionMoji.textContent="Select an Option"
  hideQuiz()
  
  hiraganaStartButton.textContent = "Hiragana"
  katakanaStartButton.textContent = "Katakana"
  allKanaStartButton.textContent = "All Kana"
  
  document.querySelector("fieldset").append(hiraganaStartButton)
  document.querySelector("fieldset").append(katakanaStartButton)
  document.querySelector("fieldset").append(allKanaStartButton)
  
  hiraganaStartButton.addEventListener("click", loadHiragana)
  katakanaStartButton.addEventListener("click", loadKatakana)
  allKanaStartButton.addEventListener("click", loadAllKana)
}

function loadHiragana(){
  hiragana.forEach(element => {
    roundKana.push(element)
  });
  roundKana.forEach(element => {
    selectedKana.push(element)
  });
  showQuiz()
}
function loadKatakana(){
  katakana.forEach(element => {
    roundKana.push(element)
  });
  roundKana.forEach(element => {
    selectedKana.push(element)
  });
  showQuiz()
}
function loadAllKana(){
  hiragana.forEach(element => {
    roundKana.push(element)
  });
  katakana.forEach(element => {
    roundKana.push(element)
  });
  roundKana.forEach(element => {
    selectedKana.push(element)
  });
  showQuiz()
}


function correctHeader(){
  stats.textContent = "Correct Answer, You have " + (selectedKana.length - 1) + " questions remaining"
  header.style.backgroundColor = "green";
}

function wrongHeader(){
  stats.textContent = "Wrong Answer, You have " + (selectedKana.length - 1) + " questions remaining"
  header.style.backgroundColor = "red";
}




function quizResult(){
  hideQuiz()
  header.style.backgroundColor = "aqua";
  stats.textContent = "おわりました"

  let totalScore = roundKana.length
  let userScoreCounter = document.createElement("p")
  userScoreCounter.textContent= "You scored " + userScore + " correct out of " + totalScore;
  questionMoji.textContent="Result"
  document.querySelector("fieldset").append(userScoreCounter)

  document.querySelector("fieldset").append(resetButton)
  resetButton.addEventListener("click", reset)
}

function reset(){
  location.reload()
}


startScreen()
