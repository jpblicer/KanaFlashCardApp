# KanaFlashCardApp

/-- What this is --/

Flash Card Application that lets users test their knowledge of the Japanese Kana written in plain JavaScript. User can choose Hiragana, Katakana or a mix of both and recieve a result at the end.


/-- About --/

This project was primarily created for myself as a learning tool to better understand vanilla Javascript.

I wanted to create a straight forward and minimal flashcard app that would allow users to test their knowledge for the Kana. Starting with Hiragana and Katakana and then a mix of both. The first and, possibly most rote, stepping stone to learning Japanese.

This would be a more digital solution to standard pen and paper flashcards.


/-- Step by Step --/

2 arrays with objects are created for Hiragana and Katakana. Each contains the character or Moji and the associated Sound.
Each used element for the dom is stored in a variable for reference in the app.

Upon loading the page the startScreen function will invoke which will hide the quiz and display to the user 3 options for what they want to study. Hiragana Katakana or both.

Depending on the option the next function with load the approprirate Kana into a new array called roundKana. It will finally invoke the showQuiz function which dispays the quiz, hides the startMenu and starts the quiz.

The startApp function is invoked which startQuiz. It will create a new array of possibleAnswers which stores each rounds correct answer and 3 wrong answers. These are put into a shuffleAnswers Function which will iterate over the array and randomly place each element back into the array.

The next function displayQuestion will output the approprirate information to the DOM and add an event listener to the submit button.

The event will prevent the page from reloading and instead check the value of the selected radio button and compare it to the correct answer. If the answers are the same the user gains a point, and the green header is shown. If wrong there is no change to the score and the red header is shown. No matter the result; the correct answer is removed from its array and the event listener is removed from the submit button.

nextRound will determiine if there are remaining Kana to be tested. It will repeat the quiz with the remaining Kana if there are any reamining; otherwise it invokes the quizResult function.

quizResult will hide the quiz and show the user how many they got right out of the total questions and change the header back to aqua. It will also add a reset button to the Dom which when clicked simply reloads the page for simplicity.


/-- Challenges --/

Challenge 1: Getting the possibleAnswers Array to select random results without duplicates. Using boolean logic stopped the 3 wrong answers from being duplicates of the correct Answer and each other.

Challenge 2: The original version of the startQuiz function was pulling the wrong answers from the same array as the correct answer. The problem was as the quiz went on, the remainig potential wrong answers became fewer as time went on finally ending with every answer being the same. Pulling the wrong answers from a different array as the right answers solved this issue.

Challenge 3: There was an issue that each time a round was played the submit button was adding another event listener. The result was the first round would answer 1 time, the 2nd round 2, and the third round 3. This was thorwing off the user score; providing incorrect feedback, and the amount of rounds reminaing drastically reduced. By adding and removing the event listener from the submit button between each round.

Challenge 4: During the duration of the quiz there was a lack of feedback. By adding in a header that would change color based on right or wrong answers and also displaying the remaining rounds; the user would feel more motivation to continue.