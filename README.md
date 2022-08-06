# Around the World Pub Quiz
## Introduction
This [Around the World](https://leah-jala.github.io/Portfolio2-Quiz-Geography/) quiz has been created to fulfill Code Institute's Portfolio Project 2 course requirement. The course objective was to build an interactive front-end site using HTML, CSS and Javascript, which should allow users to interact with the site adn alter the way the site presents data.

As a product of the fictional company, "Pub Quiz Wiz, the goal of the quiz is to help players gain knowledge for that next pub quiz. I choose the theme of geography because it is a weak area for many people, as it is not a topic given limited focus in schools.

![Am I Responsive image](docs/read-me-images/am-i-responsive.JPG) 

## Design with Wireframes
I used Balsamiq Wireframes to plan the design of the game, and it helped me to plan the html, with ids and classes, before I came to write it. This was thanks to the model presented in the Love Maths walk through. 

- Start/home screen

![start page](/docs/read-me-images/WF-instructions.JPG)

- Desktop design of the game in play

- ![Desktop in play](/docs/read-me-images/WF-in-play-desktop.JPG) 

- Mobile design of the game in play
![Mobile game in play](/docs/read-me-images/WF-mobile.JPG)

- Game over screen
![Game over screen](/docs/read-me-images/WF-game-over.JPG)
## Features
The aim was for the quiz to be as intuitive as possible. Everyone has played this sort of multiple choice quiz. One complaint from the young people I talked to was that they didn't get enough feedback on right and wrong answers, or the feedback was given in an awkward way. I decided that the user should have immediate feedback, as it would also help them learn faster. 

The feature goals are summarized below.

### User Experience Goals & Feature Responses
#### Instructions

- Goal: The user only needs brief instructions to play the game. Play should be intuitive.
    - Response: The landing page has a set of brief instructions. 
    - Value: Even if the game is simple and intuitive, people like to know how games/quizzes work and what to expect. With this quiz, it helps to know it will be challenging (the instructions prepare you to expect tricky questions) and that you can only get three wrong answers. The instructions also make it know that you can't reverse by using the browser arrows for a second try at a quesiton. 
![Instructions](/docs/read-me-images/instructions.JPG)

#### Interaction
- Goal: The user should be certain of their selection.
    - Response: Hover properties were added to the button to confirm user selection.
    - Value: As the look of the answer button changes, the user is sure about which button they are selecting and is at least much less likely to inadvertently choose the wrong answer. The button size is likewise large enough to help prevent an accidental choice.
![Button hover](/docs/read-me-images/hover.png)

- Goal: The user should get feedback if their selection was correct, and learn what the correct was correct.
    - Response: If a wrong answer is selected, the button turns red and the correct response turns green. A correct answer turns green. All buttons if neither wrong, nor selected, turn grey.  If a player gets three answers wrong, a "timeout" prevents the "Game Over" screen from displaying immediately, giving the user the chance to see the correct answer.
    - Value: I asked a small group of young people who regularly take BuzzFeed quizzes what they liked and didn't like. These were my daughters and their friends, but in all fairness they spend a lot of time on this. They feed back that they wanted immediate feedback on a selected answer rather than waiting for the end. By giving this feedback, they say that the game is less frustrating to use and it gives them a better chance of remembering the answer for the next time. 
    
- Goal: The user should know how many they have got wrong. 
    - Resposne: In the score area, there are three pints of beer. If the user chooses the wrong answer, one of the beer mugs is replaced by an empty image. If a user gets three wrong answers, there is a timeout so the user has a chace to see the correct answer before the Game Over screen is displayed.
    - Value: Game users are used to the idea of having three lives. The 3 beer pints that change their value offer this familiarity, while at the same time bring some fun to the game. The user always knows how many answers they can still get wrong.
- Goal: The user should get a score.
    - Response: A tally is kept at the top of the screen. The answer is given out of the total number of questions that will be asked. 
    - Value: The tally at the top lets users know how many that they have got right, but it also indicates how far they have progressed. I asked the group I tested the game on if they would also like a tally of total questions asked, in order not to have to add wrong answers to the score, but no one thought it was necessary. 

I originally had a number of feedback statements after the user selected make an answer selection. The people who tried my game thought it wasn't necessary. Either they stopped paying attention to it, didn't care about it one way or another, or found it distracting. I decided to delete it. 

#### Experience
- Goal: The game site should be easy to navigate.
    - Response: The start page has brief instructions and one button/choice, making it obvious how to start the game. The format of the question answer section is familiar as most games follow the same or similar format.
    - Value: The familiarity of the game design allows users to confidently jump right into the quiz. See comment above on the value of the instructions.
- Goal: The game should be challenging, as the objective is to learn something new, but not so challenging that it is impossible to get any questions correct.
    - Response: I looked at the types of questions that are published for pub quizzes and found that the questions could be quite challenging. To win a pub quiz, you'd have to know the difficult questions and this game is intended to prepare people to do that, so the questions should be difficult. The game has mostly difficulty questions, with some easy ones. Most people's general knowledge would allow them to eliminate at least half of wrong answers in the answer section. This is at least my intention, and I acknowledge I am not an expert at these types of quizzes. 
    - Value: Most people will learn something new by taking the quiz, but they should be prevented with enough answers they know so as not to get frustrated.
- Goal: At the end of the game, users should feel that they want to play again. 
    - Response: Each game round is limited to 15 questions - five from each of the categories. It is not a big time commitment to play, and if the player gets a lot of wrong answers, they can be more quickly mastered.
    - Value: With only 15 questions presented from a total bank of 30, the player will always have some answers repeated and some different questions. The player can get a sense of mastering some, while still being challenged by new questions. My testers said they thought it was fun because they wanted to keep doing it until they could get them all correct.
- Goal: Users should have a variety of questions.
    - Response: There are 3 subject areas, which are capitals, rivers and general trivia. Five questions are presented after shuffling a greater number of questions in the category. 
    - Value: This gives some variety of questions and by grouping them into cateogies, it has the familiarity of games they are used to, such as "Trivial Pursuit" or "Jeopardy." It also gives scope for developing the game further to include additional categories, and also adding a feature which would allow users to select from a number of categories. 
- Goal: It shouldn't be possible to cheat by skipping questions. 
    - Response: The "Next Question" button is not visible on the question/anwer page until the user makes a selection. 
    - Value: I think that most players wouldn't try to go back a step, but it would be natural to want to take a pass on some questions. By removing the option, allows the user to have a genuine sense of accomplishment and learning at the end while. I believe it makes the game more robust.

### Responsiveness
This game was designed using flex properties, to allow it be be responsive to different sized screens. I kept the screen on "inspect" and tested the responsiveness between 280 pixels wide to the game's maximum width. This maximum width was limited to 800px. After testing my link on "Am I responsive," I found that it looked a bit odd being centred at the top of a large screen and added a margin for large screens, and removed it with a media query on small screens. 

## Testing the game
### User Feedback
I have sent the game to people across a range of age groups. 
- Age 16-18: 4 people
- Age 20-30: 5 people
- Age 30-40: 3 people
- Age 50-60: 6 people
- Age 60 and over: 4 people

The game was most popular with young people who liked the challenge of it. They said they liked it because they had weak geography knowledge and the game allowed them to learn new facts. Older people gave me the impression they were embarrassed if they didn't know the answers.

Originally, the game had used all 10 questions per category, meaning there were a total of 30 questions. This was more a negative for people 30+. It was too much of a time commitment and too frustrating because a lot of the questions were perceived as difficult, especially the rivers. When reduced to 5 questions and shuffled, the player was able to learn the answers and progress through the themes. It also resulted in playeres wanting to play multiple times to get the satisfaction of getting a perfect score. Each time they played, they got some different questions. This made the game more interesting to repeat. 

When questioned whether there should be more easy questions, or if there should be a chance to get an extra try, the testers said no.  They liked the traditional three strikes and you're out model and felt that if that wasn't there, one would engage with the quiz passively and not remember the answers. 

Players liked the blue and green colors, matching the globe.

Players thought the game was intuitive.

Players thought the beer pints were fun.

Players liked the color changes to the answer buttons.

I sought out criticism, but did not get much. This will to some extent be done to testing the game on people I know. There was some debate over the answer to one question, which I have now removed. It was a question about the longest river in the world, with some sources saying the Nile and others the Amazon. 

I think perhaps the best and worst criticism I had is that it works like every other quiz they've tried on the internet. 

### Device Testing
The people who tested the quiz had the following types of phones and PCs, with no reported problems. Most people had iPhones. 
- iPhone 8 (2 people)
- iPhone 10 (5 people)
- iPhone 12 (3 people)
- iPhone, release not specified (2 people)
- iPad, release not specified
- Huawei P Smart (approximately 4 years old)
- Samsung Galaxy A13 (New)
- Samsung, not specified (described as "cheap")
- Dell PC - not specified (3 people: work computers, details not known)
- Hewlit Packard Pavilion PC (10 years old)
- Mac Air Book (3 years old, and "new")

### Manual Testing

Game Area description

1. In the table below, the "Header" refers the top section of the game with the spinning globe gif and the title of the game.

![Header](/docs/read-me-images/Header.JPG)

2. The "Start Page" is the homepage which displays the instructions, and presents a "Begin Game" button. The score should be zero, and all 3 beer pints should be full to indicate there are no wrong answers. 

![Start Screen](/docs/read-me-images/start-screen.JPG)

3. The "Score area" is the blue section which tells the user the theme of the question, shows if a wrong answer has been selected by displaying and empty pint, and records the tally of correct answers. 

![Score Area](/docs/read-me-images/Score%20area.JPG)

4. The "Game Area" is the green section of the game where on the start screen instructions are displayed, and once the game begins, these instructions are replaced by questions and answers. The smaller font seen under the instructions is a paragraph used to also display user messages. This paragraph remains hidden until the Game Over screen is displayed. 

![Game area with questions](/docs/read-me-images/game-area-questions.JPG)

5. This is the same area with an incorrect response. Notice that the "Next Question" button appears after the user selects and answer, and, as this is a wrong answer, a beer pint has been emptied. The game screen also shows users they are answering questions about capitals and they have answered 1 question correctly.

![Incorrect answer in game area](/docs/read-me-images/game-area-incorrect.JPG)

6. The "Under Game area" refers to the white block under the green section (see above). This contains either the "Begin Game/Next Question" button, or the "Start Over" link which only appears when the game is over. Below is an example of the "Game Over" screen.

7. The Game Over Screen gives let's the player know the game is over and gives them a message.
![Game over screen](/docs/read-me-images/game-over.JPG)

| Area | Target |Expected | Result |
| ---------------- |---------------- |---------------- | -----
|Header | A gif image of the earth in blue and green | It should continuously | True|
| Score Area | The theme displayed on the left side of the score area |The text "Instructions" is displaying | True |
|Score area |The three beer pints on the start page, meaning the game hasn't started  |Beer pints should be full/yellow | True |
|Score area|The score tally section on the right hand section of the score area. |Before the user begins a game, the score is 0 of 15 | True |
|Game area |The green section |On the start page, before the user clicks the begin game button, instructions  on how to pay are displayed. | True |
|Game area | he green section |On the start page, before the user clicks the begin game button, the user message (in smaller font) displays, "How many can you get right at the start of game. | True |
|Under Game area|The white section under the green area, on the start page.|Begin Button hover properties work| True|
|Under Game area|The white section under the green box.|The "Begin Button", when clicked, takes user to question page and hides| True|
|Score area|The "Theme" on the left-hand side|Once the game is in play, starting from question one, the word "instructions" should change to "Theme: Capitals"|True after fix 1, see below.|
|Score Area|Theme, as above| The theme display as "Rivers" when question index (which begins at zero) is between 5-9, and "Trivia when questionIndex 10-14|True|
|Score Area|The three pints in the middle|Pints change from full to empty when the players selects the wrong answer.|True|
|Score Area|Score tally on the right|The score increments with correct answers only.|True|
|Game Area|Questions|Questions from the correct theme are presented to the river, e.g. if the theme is capitals, the questions asks for the same.|True for all 3 themese|
|Game Area|Questions|The question are shuffled when game reloads|True|
|Game Area|The answer buttons|The hover properties work.|True|
|Game Area|Answer buttons|The text content on the answer buttons match the related question.|True|
|Game Area|Answer buttons|When an answer button is selected, a correct answer display green, wrong answer display red,  other questions grey.|True|
|Game Area|Answer buttons|When there are three wrong answers the game ends.|True|
|Game Area|Answer buttons|After 3 wrong answers, the function pauses before moving to "game over," to give the user time to see the correct answer.|True|
|Game Over|The message given when there are no wrong answers|If all answers are correct (15/15), user message reads, "Amazing result! Please be on my team"|True|
|Game Over|The message to the user with 1 wrong answer|The message is, "Game Over! Only one wrong! Try again for a perfect score!"|True|
|Game Over|The message to the user with 2 wrong answers|The message is, "Game Over! You're on your way to being a expert. Play again to improve your score!"|True|
|Game Over|The message to the user with 3 wrong answers|"Keep playing to improve your score!"|True|
|Game Over|"Start Over" link|When clicked, the game refreshes and returns to the screen with instructions, with score and pint values reset. |True|


### Fixes:
1. The "theme" variable was declared incorrectly, and although it worked in the GitPod development environment, the game then did not work when deployed on GitHub. After declaring the variable the game worked. 
2. While developing the game, I would try things out and inadvertently do things like delete and id,rename a class or ID and forget to update the CSS, or wind up with a stray div. I fixed this type of error as I went along.  
3. Via JSHint, I discovered I had forgotten a number of variables and discovered some undeclared variables. 
4. Added a media query to remove the body's top margin from small screens. 

### EBIs (even better if)
- I wanted to add a window.beforeunload function, but learned that it was not possible to create a custom message, so I have changed the instructions instead. 
- As I went through the testing, I felt that there should be more user messages to match the end results. There are now user messages for game finishers with 1 and 2 wrong answers, which appear on the "Game Over" screen. Previously, there had only been messages for any score that was not 15/15 and a for a perfect score.

### Lighthouse
Lighthouse Destop results
![Lighthouse-desktop](/docs/read-me-images/lighthouse-quiz-desktop.JPG)

Lighthouse Mobile results
![Lighthouse-desktop](/docs/read-me-images/lighthouse-quiz-mobile.JPG)

Performance is slightly compromised by the rotating globe image. I followed the advice to convert it to webm and use a video tag. While I was able to do this successfully, by which I mean, it was uploaded and played automatically, it did not change the lighthouse score. At the same time, if you hovered over the webm file, you could see some properties which I didn't like. Based on my testers' experience of the game, I think this problem is not significant. The game loaded quickly on phones. 

The beer images were also listed as a problem. I had already used TinyPNG to compress them and I changed the height values to be explicit, but it did not change the Lighthouse result. 

## Technology
- [Google Fonts](https://fonts.google.com/) - I used the Roboto font style.
- W3C Markup Validation Service
- W3C CSS Validation Service - Jigsaw
- Lighthouse
- JSHint 
## Deployment
### Version control
To develop the quiz, I created a repository in GitHub, using a Code Institute Template, and then created a GitPod workspace. Files were uploaded to the GitHub repository by making using of the following commands:
- 'git add . ', which adds files to a staging area before they are committed.
- 'git commit - m "Commit Message"', this commits the changes to a local repository queue.
- 'git push', this sends all the commits in the queue to the GitHub repository.
### Deployment
To create a public link for the game, I took the following steps in GitHub:
- Navigate to settings on the top, horizontal menu bar.
- Click on pages from the left-hand, vertical menu bar.
- Select source, "Deploy from a branch"
- Select branch, "Main", and save
- After several minutes, a link is displayed. The link for this quiz is https://leah-jala.github.io/Portfolio2-Quiz-Geography/

### Note on Commits
When I wrote the HTML and CSS, I felt I had got the hang of making good commits compared to project portfolio 1. When I got to a certain stage of writing the JavaScript, it all became a mess as I would try something which didn't work and repeatedly change and fix things until my commits were a confusing mess or I had worked so long I didn't even know what the commit should be. I decided to redo the project because of this in a new repository. When I looked at the commits, I realized that they did not represent an accurate step by step process, so I did it again. I found it incredibly difficult to reproduce my own code again, as I did the first time, and now I realize it must look like I have created this project very quickly, in a day, which is VERY far from the truth. I think some of the commits might still be too large. I need to learn more about version control. I have been reading up on cloning projects in GitHub. 

## Credits/To be completed
- Daisy
### Javascript
- Web Dev Simplified
- The Fisher Yates shuffle
### Page Design
- [Font Awesome](https://fontawesome.com/) - For the beer pints.
- Balsamiq Wireframes
- [CSS Tricks, A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
### Images
- [ShutterStock](https://www.shutterstock.com/) - The rotating globe.
### General Resources
- [W3Schools](https://www.w3schools.com/) - As a general reference.
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) 
