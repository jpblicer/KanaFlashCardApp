/*
DONE List of Kana and their respective sounds
DONE 1 random kana is selected and becomes the question

DONE - its sound is listed as a multiple choice question
    TODO - it must be removed from list as duplicate

DONE 3 other random kana sounds are chosen along side it
    TODO They also cannot be duplicates

User selects one of the 4 sounds
    if the user selects sound matches the selected question kana
        user gets a point
    if the user selects the wrong sound for the selected question kana
        no point
    
The question kana is removed from the list 
the next kana is chosen

After the list is completed the final score is shown

*/

const mojiElement = document.getElementById("moji")
const answerAElement = document.getElementById("answerALabel")
const answerBElement = document.getElementById("answerBLabel")
const answerCElement = document.getElementById("answerCLabel")
const answerDElement = document.getElementById("answerDLabel")

const form = document.getElementById("form")
const answerTest = document.getElementById("answerA")
const answers = document.getElementsByName("answers")





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
    shuffleAnswers(allAnswers)  


};

function shuffleAnswers(allAnswers){
    for(let i = allAnswers.length - 1; i>0; i--){
        const x = Math.floor(Math.random()*(i+1));
        [allAnswers[i], allAnswers[x]] = [allAnswers[x], allAnswers[i]];
    }
    let shuffledAnswers = allAnswers
    console.log("the shuffled answers are " + shuffledAnswers)
    displayAnswers(shuffledAnswers)

}

function displayAnswers(shuffledAnswers){
    answerAElement.textContent = shuffledAnswers[0]
    answerAElement.value = shuffledAnswers[0]
    console.log(answerAElement.value)
    
    answerBElement.textContent = shuffledAnswers[1]
    answerBElement.value = shuffledAnswers[1]
    
    answerCElement.textContent = shuffledAnswers[2]
    answerCElement.value = shuffledAnswers[2]
    
    answerDElement.textContent = shuffledAnswers[3]
    answerDElement.value = shuffledAnswers[3]
    
    let roundAnswer = ""

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
            }
        }
        event.preventDefault();
    })     
    
};



    


/*
form.addEventListener("submit", event =>{
    console.log(event.target.value)

    event.preventDefault();
});
*/

questionStart()













/*
function chooseMoji(){
    let chosenMoji =  hiragana[Math.floor(Math.random()*hiragana.length)];
    mojiElement.textContent=`what is the sound for: ` + chosenMoji.moji
    correctAnswer = chosenMoji.sound;
    answerAElement.textContent= correctAnswer;
    hiragana = hiragana.filter(v=> v !== chosenMoji);

    let wrongAnswerOne = hiragana[Math.floor(Math.random()*hiragana.length)];
    answerBElement.textContent= wrongAnswerOne.sound;
    hiragana = hiragana.filter(v=> v !== wrongAnswerOne);

    let wrongAnswerTwo = hiragana[Math.floor(Math.random()*hiragana.length)];
    answerCElement.textContent= wrongAnswerTwo.sound;
    hiragana = hiragana.filter(v=> v !== wrongAnswerTwo);

    let wrongAnswerThree = hiragana[Math.floor(Math.random()*hiragana.length)];
    answerDElement.textContent= wrongAnswerThree.sound;
    hiragana = hiragana.filter(v=> v !== wrongAnswerThree);

    form.addEventListener("submit",(event)=>{
        if (chosenMoji.sound === correctAnswer){
            console.log("right answer")
        }else{
            console.log("wrong answer")
        }
        event.preventDefault();
    });
}

chooseMoji()

*/
