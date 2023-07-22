/*
TODO

DONE Create a Kana class
DONE Create a Hiragana object [start with a i u e o]
    DONE Should have moji and the sound


Quiz will display to page
    Quiz should populate the moji from the moji list at random
    Quiz will populate the answers with
        1 corerct sound
        3 randomly selected wrong sounds

After 3 rounds it is complete
Display Answers correct out of total
*/

const mojiElement = document.getElementById("moji")
const answerAElement = document.getElementById("answerALabel")
const answerBElement = document.getElementById("answerBLabel")
const answerCElement = document.getElementById("answerCLabel")
const answerDElement = document.getElementById("answerDLabel")


const answerTest = document.getElementById("answerA")
//console.log(answerAElement.value)


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
]

const test = [
    "a",
    "b",
    "c"
]


function chooseMoji(){
    let chosenMoji =  hiragana[Math.floor(Math.random()*hiragana.length)];
    mojiElement.textContent=`what is the sound for: ` + chosenMoji.moji
    correctAnswer = chosenMoji.sound;
    answerAElement.textContent= correctAnswer;
    
}

chooseMoji()


/*
answerBElement.textContent= `B: ` + hiragana.i
answerCElement.textContent= `C: ` + hiragana.u
answerDElement.textContent= `D: ` + hiragana.o
*/