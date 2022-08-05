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
| Start page | Score area |Instructions text visible | True |
| Start page | Score area |Beer pints should be full | True |
| Start page | Score area  |Score is 0 of 15 | True |
| Start page | Game area |Instructions displayed in question area | True |
| Start page | Game area | User Message displays, "How many can you get right at the start of game. | True |
| After clicking Game Over Link | Start page |All of the above is reset. | true |
|Question/Answer  | Capitals questions (1-5) | 1st Wrong answer: Wrong answer turns read, right answer turns green, and beer pint 3 (right)changes. | True|
|Question/Answer  | Capitals questions (1-5) | 2nd Wrong answer: As above, with the middle pint turning empty. | True|
|Question/Answer  | Capitals questions (1-5) | 3rd Wrong answer: As above, with all beer pints empty. Plus, the game ends by displaying the start over page with message, "Thanks for Playing". The "Start Over" link is displayed. | True|
|Progression | Capitals to Rivers| No wrong capitals answers: Score area subject text changes to Rivers. |True| 

|Progression | Capitals to Rivers|2 Wrong answers:  |

Fixes from testing

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
