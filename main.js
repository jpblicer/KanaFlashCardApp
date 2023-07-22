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
    {a: "あ"},
    {i: "い"},
    {u: "う"},
    {e: "え"},
    {o: "お"}
]


function chooseMoji(){
    return hiragana[Math.floor(Math.random()*hiragana.length)];
} 



/*
class Kana {
 constructor(moji, sound){
    this.moji = moji;
    this.sound = sound;
 }

test(){
    return `${this.moji} and ${this.sound}`
    }
};

hiraA = new Kana("あ", "a");
hiraI = new Kana("い", "i");
hiraU = new Kana("う", "u");
hiraE = new Kana("え", "e");
hiraO = new Kana("お", "o");

console.log(hiraI.test())


//here
mojiElement.textContent=`what is the sound for: ` + hiragana[1].i
answerAElement.textContent= `A: ` + hiragana.a
answerBElement.textContent= `B: ` + hiragana.i
answerCElement.textContent= `C: ` + hiragana.u
answerDElement.textContent= `D: ` + hiragana.o
*/