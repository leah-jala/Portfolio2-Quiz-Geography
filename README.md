# Around the World Pub Quiz
## Introduction
This game has been created to fulfill Code Institute's Portfolio Project 2 course requirement. The course objective was to build an interactive front-end site using HTML, CSS and Javascript, which should allow users to interact with the site adn alter the way the site presents data.

As a fictional game, the goal of the quiz is to help players learn some tough geography questions to help users brush up and gain knowledge for that next pub quiz. I choose the theme of geography because it is a weak area for many people, as it is not a topic given much focus in schools. 

## Design

## Features
### User Experience Goals & Feature Responses

#### Instructions
- Goal: The user only needs brief instructions to play the game. Play should be intuitive.
    - Response: The landing page has a set of brief instructions. 

#### Interaction
- Goal: The user should be certain of their selection.
    - Response: Hover properties were added to the button to confirm user selection.
- Goal: The user should get feedback if their selection was correct, and learn what the correct was correct.
    - Response: If a wrong answer is selected, the button turns red and the correct response turns green. A correct answer turns green. All buttons if neither wrong, nor selected, turn grey.  
- Goal: The user should know how many they have got wrong. 
    - In the score area, there are three pints of beer. If the user chooses the wrong answer, one of the beer mugs is replaced by an empty image. If a user gets three wrong answers, there is a timeout so the user has a chace to see the correct answer before the Game Over screen is displayed.
- Goal: The user should get a score.
    - A tally is kept at the top of the screen. The answer is given out of the total number of questions that will be asked. 

I originally had a number of feedback statements after the user selected make an answer selection. The people who tried my game thought it wasn't necessary. Either they stopped paying attention to it, didn't care about it one way or another, or found it distracting. I decided to delete it. 

#### Experience
- Goal: The game site should be easy to navigate.
    - Response: The start page has brief instructions and one button/choice, making it obvious how to start the game. The format of the question answer section is familiar as most games follow the same or similar format.
- Goal: The game should be challenging, as the objective is to learn something new, but not so challenging that it is impossible to get any questions correct.
- Goal: At the end of the game, users should feel that they want to play again. 
    - Response: Each game round is limited to 15 questions - five from each of the categories. It is not a big time commitment to play, and if the player gets a lot of wrong answers, they can be more quickly mastered.
- Goal: Users should have a variety of questions.
    - Response: There are 3 subject areas, which are capitals, rivers and general trivia. Five questions are presented after shuffling a greater number of questions in the category. 
- Goal: It shouldn't be possible to cheat by skipping questions. 
    - Response: The "Next Question" button is not visible on the question/anwer page until the user makes a selection. 


## Testing
| Area | Target |Expected | Result |
| ---------------- |---------------- |---------------- | -----
|Header | Globe Gif | It should spin | Valid|
| Start page | Score area |The word "Instructions" is displaying | True |
| Start page | Score area |Beer pints should be full | True |
| Start page | Score area  |Score is 0 of 15 | True |
| Start page | Game area |The innstructions  on how to pay aredisplayed in question area | True |
| Start page | Game area | User Message displays, "How many can you get right at the start of game. | True |
|Start page|Under Game area|Begin Button hover properties work| True|
|Start page|Under Game area|Begin Button, when clicked, takes user to question page and hides| True|
|Score Area|Pints|Pints change from full to empty when an answer is wrong|True|
|Score area|Theme|The word "instructions" should change to "Theme: Capitals"|False - it still says instructions. Fix 1
|Score Area|Theme| The theme should change to rivers when questionIndex=5, and to trivia when questionIndex 6|True|
|Game Over|User Message|If all answers are correct (15/15), user message reads, "Amazing result! Please be on my team"|True|
|Game Over|User Message|If wrongAnswer = 3, user message reads, "Game Over! Thanks for Playing"|True|


Fixes:
1. Theme variable declared incorrectly. Rewrote. 


## Technology
- Google Fonts
- Font Awesome
-  
## Deployment
## Credits
### Javascript
- Web Dev Simplified
- The Fisher Yates shuffle
### Page Design
- Course Material
- ShutterStock images
- W3 Schools
- 
