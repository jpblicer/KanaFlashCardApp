const mojiElement = document.getElementById("moji")
const answerAElement = document.getElementById("answerALabel")
const answerBElement = document.getElementById("answerBLabel")
const answerCElement = document.getElementById("answerCLabel")
const answerDElement = document.getElementById("answerDLabel")


const answerTest = document.getElementById("answerA")

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


function chooseMoji(){
    let chosenMoji =  hiragana[Math.floor(Math.random()*hiragana.length)];
    mojiElement.textContent=`what is the sound for: ` + chosenMoji.moji
    correctAnswer = chosenMoji.sound;
    answerAElement.textContent= correctAnswer;
    console.log(hiragana.indexOf(chosenMoji))
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

}

chooseMoji()