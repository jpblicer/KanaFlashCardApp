/*
DONE List of Kana and their respective sounds
DONE 1 random kana is selected and becomes the question

DONE - its sound is listed as a multiple choice question
    TODO - it must be removed from list as duplicate

DONE 3 other random kana sounds are chosen along side it
    TODO They also cannot be duplicates

DONE User selects one of the 4 sounds
    DONE if the user selects sound matches the selected question kana
        DONE user gets a point
    DONE if the user selects the wrong sound for the selected question kana
        DONE no point
    
The question kana is removed from the list 
the next kana is chosen

After the list is completed the final score is shown

UserScore is not being tracked correctly


*/

const mojiElement = document.getElementById("moji")
const answerAElement = document.getElementById("answerALabel")
const answerBElement = document.getElementById("answerBLabel")
const answerCElement = document.getElementById("answerCLabel")
const answerDElement = document.getElementById("answerDLabel")

const form = document.getElementById("form")
const answerTest = document.getElementById("answerA")
const answers = document.getElementsByName("answers")

let userScore = 0;



let hiragana = [
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
]


function questionStart(){
    let questionKana =  hiragana[Math.floor(Math.random()*hiragana.length)];
    console.log("the question moji is " + questionKana.moji)
    mojiElement.textContent=`what is the sound for: ` + questionKana.moji
    let correctAnswer = questionKana.sound;
    console.log("the correct answer is " + correctAnswer)
    selectAnswers(correctAnswer)

}

function selectAnswers(correctAnswer){
    let wrongAnswerOne = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
    
    let wrongAnswerTwo = hiragana[Math.floor(Math.random()*hiragana.length)].sound;
    
    let wrongAnswerThree = hiragana[Math.floor(Math.random()*hiragana.length)].sound;

    let allAnswers = [correctAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree]
    console.log("all possible answers " + allAnswers)
    shuffleAnswers(allAnswers , correctAnswer)  


};

function shuffleAnswers(allAnswers, correctAnswer){
    for(let i = allAnswers.length - 1; i>0; i--){
        const x = Math.floor(Math.random()*(i+1));
        [allAnswers[i], allAnswers[x]] = [allAnswers[x], allAnswers[i]];
    }
    let shuffledAnswers = allAnswers
    console.log("the shuffled answers are " + shuffledAnswers)
    correctAnswer = correctAnswer
    displayAnswers(shuffledAnswers, correctAnswer)

}

function displayAnswers(shuffledAnswers, correctAnswer){
    answerAElement.textContent = shuffledAnswers[0]
    answerAElement.value = shuffledAnswers[0]
    console.log(answerAElement.value)
    
    answerBElement.textContent = shuffledAnswers[1]
    answerBElement.value = shuffledAnswers[1]
    
    answerCElement.textContent = shuffledAnswers[2]
    answerCElement.value = shuffledAnswers[2]
    
    answerDElement.textContent = shuffledAnswers[3]
    answerDElement.value = shuffledAnswers[3]
    

    form.addEventListener("submit", event =>{
        for (let userAnswer of answers){
            if(userAnswer.checked){
                switch(userAnswer.id){
                    case "answerA":
                        userAnswer = answerAElement;
                        break;
                    case "answerB":
                        userAnswer = answerBElement;
                        break;
                    case "answerC":
                        userAnswer = answerCElement;
                        break;
                    case "answerD":
                        userAnswer = answerDElement;
                        break;   
                    default:
                        console.error("No Answer Error") 
                }
                console.log(userAnswer.textContent)
                console.log(correctAnswer)
                if(correctAnswer === userAnswer.textContent){
                    console.log("correct again")
                    userScore++
                    console.log(userScore)
                    questionStart()
                    }
                else{
                    console.log("wrong answer")
                    userScore--
                    console.log(userScore)
                    questionStart()
                }
            }
        }
        event.preventDefault();
    })     
    
};


questionStart()

