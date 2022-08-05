//Question variables

let questions = [
    {
        question: "What is the capital of Kenya?", 
        answers: [
            {text: "Bamako", correct: false},
            {text: "Nairobi", correct: true},
            {text: "Abuja", correct: false},
            {text: "Dakar", correct: false} 
        ]
    },
    {
        question: "What is the capital of Canada?", 
        answers: [
            {text: "Gothenburg", correct: false},
            {text: "Edmonton", correct: false},
            {text: "Toronto", correct: false},
            {text: "Ottawa", correct: true} 
        ]
    },
    {
        question: "What is the capital of Armenia?", 
        answers: [
            {text: "Yerevan", correct: true},
            {text: "Baku", correct: false},
            {text: "Turku", correct: false},
            {text: "T'bilisi", correct: false} 
        ]
    },
    {
        question: "What is the capital of Portugal?", 
        answers: [
            {text: "Porto", correct: false},
            {text: "Lisbon", correct: true},
            {text: "Lagos", correct: false},
            {text: "Madrid", correct: false} 
        ]
    },
    {
        question: "What is the capital of Jordan?", 
        answers: [
            {text: "Tehran", correct: false},
            {text: "Beirut", correct: false},
            {text: "Amman", correct: true},
            {text: "Damascus", correct: false} 
        ]
    },
    {
        question: "What is the capital of Slovenia?", 
        answers: [
            {text: "Maribor", correct: false},
            {text: "Ljubljana", correct: true},
            {text: "Bled", correct: false},
            {text: "Celje", correct: false} 
        ]
    },
    {
        question: "What is the capital of Australia?", 
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Darwin", correct: false},
            {text: "Canberra", correct: true} 
        ]
    },
    {
        question: "What is the capital of Jamaica?", 
        answers: [
            {text: "Shepperton", correct: false},
            {text: "Montego Bay", correct: false},
            {text: "Kingston", correct: true},
            {text: "Nassau", correct: false} 
        ]
    },
    {
        question: "What is the capital of Germany?", 
        answers: [
            {text: "Bonn", correct: false},
            {text: "Dusseldorf", correct: false},
            {text: "Hamburg", correct: false},
            {text: "Berlin", correct: true} 
        ]
    },
    {
        question: "What is the capital of Bosnia and Herzegovina?", 
        answers: [
            {text: "Sarajevo", correct: true},
            {text: "Mostar", correct: false},
            {text: "Banja Luka", correct: false},
            {text: "Zenica", correct: false} 
        ]
    }   
];

let riverQuestions = [
    {
        question: "What is the longest river in Europe?", 
        answers: [
            {text: "Danube", correct: false},
            {text: "Volga", correct: true},
            {text: "Rhine", correct: false},
            {text: "Ural", correct: false} 
        ]
    },
    {
        question: "How much of the world's water is held by rivers? Source: National Geograpahic Kids", 
        answers: [
            {text: "1%", correct: true},
            {text: "5%", correct: false},
            {text: "10%", correct: false},
            {text: "15%", correct: false} 
        ]
    },
    {
        question: "Where is the Irrawady River?", 
        answers: [
            {text: "Myanmar", correct: true},
            {text: "Laos", correct: false},
            {text: "Thailand", correct: false},
            {text: "Cambodia", correct: false} 
        ]
    },
    {
        question: "Which of these states is not on the Mississipi River?", 
        answers: [
            {text: "Minnesota", correct: false},
            {text: "Alabama", correct: true},
            {text: "Iowa", correct: false},
            {text: "Wisconsin", correct: false} 
        ]
    },
    {
        question: "How many countries does the Danube flow through?", 
        answers: [
            {text: "4", correct: false},
            {text: "6", correct: false},
            {text: "8", correct: false},
            {text: "10", correct: true} 
        ]
    },
    {
        question: "The Rio Grande serves as part of the natural border between Mexico and which U.S. state?", 
        answers: [
            {text: "New Mexico", correct: false},
            {text: "Texas", correct: true},
            {text: "Arizona", correct: false},
            {text: "California", correct: false} 
        ]
    },
    {
        question: "Which river flows through Iraq's capital Baghdad?", 
        answers: [
            {text: "Sirwan", correct: false},
            {text: "Euphrates", correct: false},
            {text: "Tigris", correct: true},
            {text: "Alwand", correct: false}
            
        ]
    },
    {
        question: "Which river hosted the swimming, rowing and water polo events at the 1900 Summer Olympics?", 
        answers: [
            {text: "Seine", correct: true},
            {text: "Rhine", correct: false},
            {text: "Thames", correct: false},
            {text: "Danube", correct: false} 
        ]
    },
    {
        question: "What is the largest city on the river Rhine?", 
        answers: [
            {text: "Bonn", correct: false},
            {text: "Dusseldorf", correct: false},
            {text: "Frankfurt", correct: false},
            {text: "Cologne", correct: true} 
        ]
    },
    {
        question: "In which direction does the Nile flow?", 
        answers: [
            {text: "South to North", correct: true},
            {text: "North to South", correct: false},
            {text: "East to West", correct: false},
            {text: "West to East", correct: false} 
        ]
    }   
];

let triviaQuestions = [
    {
        question: "In which city would you find a Gondolier?", 
        answers: [
            {text: "Florence", correct: false},
            {text: "Venice", correct: true},
            {text: "Rome", correct: false},
            {text: "Naples", correct: false} 
        ]
    },
    {
        question: "Which country is known as the 'land of fire and ice'?", 
        answers: [
            {text: "Finland", correct: false},
            {text: "Norway", correct: false},
            {text: "Greenland", correct: false},
            {text: "Iceland", correct: true} 
        ]
    },
    {
        question: "What type of leaf is on the Canadian flag?", 
        answers: [
            {text: "Maple", correct: true},
            {text: "Oak", correct: false},
            {text: "Spruce", correct: false},
            {text: "Birch", correct: false} 
        ]
    },
    {
        question: "What is the smallest country in the world", 
        answers: [
            {text: "San Marino", correct: false},
            {text: "Vatican City", correct: true},
            {text: "Monaco", correct: false},
            {text: "Luxembourg", correct: false} 
        ]
    },
    {
        question: "Where are the 'Spanish Steps'?", 
        answers: [
            {text: "Madrid", correct: false},
            {text: "Naples", correct: false},
            {text: "Venice", correct: false},
            {text: "Rome", correct: true} 
        ]
    },
    {
        question: "Where should you go to get authentic Poutine?", 
        answers: [
            {text: "Canada", correct: true},
            {text: "France", correct: false},
            {text: "Belgium", correct: false},
            {text: "Switzerland", correct: false} 
        ]
    },
    {
        question: "Which country is NOT in Africa", 
        answers: [
            {text: "Chad", correct: false},
            {text: "Burkina Faso", correct: false},
            {text: "Guinea", correct: false},
            {text: "Guyana", correct: true} 
        ]
    },
    {
        question: "How many time zones does Russia have?", 
        answers: [
            {text: "8", correct: false},
            {text: "9", correct: false},
            {text: "10", correct: false},
            {text: "11", correct: true} 
        ]
    },
    {
        question: "Which country provided the setting for the Tatooine in Star Wars?", 
        answers: [
            {text: "Egypt", correct: false},
            {text: "Morocco", correct: false},
            {text: "Tunisia", correct: true},
            {text: "Algeria", correct: false}
            
        ]
    },
    {
        question: "France has been the most popular tourist destination for decades. According to 'World Population Review,' how many visitors did they have in 2019?", 
        answers: [
            {text: "30 million", correct: false},
            {text: "50 million", correct: false},
            {text: "70 million", correct: false},
            {text: "90 million", correct: true} 
        ]
    }
];

//Elements with global variables
const userMessage = document.getElementById("user-message");
const questionText = document.getElementById('question-text');
const startOver = document.getElementById('start-over');
let answers = document.getElementById('answers');
let theme = document.getElementsByTagName("h2");
//Global varibles
let answerStatus;
let rightButton;
let rightAnswer;

//Set indices to zero for each new game
let questionIndex = 0;
let capitalQuestionIndex = 0;
let riverQuestionIndex = 0;
let triviaQuestionIndex = 0; 
let wrongAnswers = 0;

//Start game the game with an event listener on the begin game button
const beginGameBtn = document.getElementById('next-btn');
beginGameBtn.addEventListener('click', runQuiz);

/**
 * Launches the game by setting the screen to display game information
 * and calling the addQuestion function.
 * Sets a global counter for questions answered.
 */ 

 function runQuiz(){
    //Set page to start - hide buttons and user message
    userMessage.classList.add("hide");
    beginGameBtn.classList.add('hide');
    startOver.classList.add('hide');
    //insert questions and answers
    beginGameBtn.innerText = "Next Question";
    answers.classList.remove('hide');
    addQuestion();
    questionIndex++;
}

/**
 * Adds a question to game after deciding which set to use. Calls functions
 * to shuffle the questions and to insert the answers.
 */
 function addQuestion() {
    answers.innerHTML = "";

    //Decide which set of questions to choose
    if (questionIndex < 5) {
        document.getElementById("theme").innerText = "Subject: Capitals";
        questionText.innerHTML = questions[capitalQuestionIndex].question;
        insertAnswers();
        capitalQuestionIndex++;
    } else if (questionIndex >= 5 && questionIndex <10) {
        document.getElementById("theme").innerText = " Subject: Rivers";
        questionText.innerHTML = riverQuestions[riverQuestionIndex].question;
        insertAnswers();
        riverQuestionIndex++;
    } else if (questionIndex >= 10 && questionIndex <15) {
        document.getElementById("theme").innerText = " Subject: Trivia";
        questionText.innerHTML = triviaQuestions[triviaQuestionIndex].question;
        insertAnswers();
        triviaQuestionIndex++;
    } else {
        gameOver();
    }
}

/**
 * Fetches the answer choices corresponding to the current question, and
 * appends an button containing the answer text.
 * Identifies and stores the correct answer. 
 */
 function insertAnswers() {
    let btnText;
    userMessage.classList.add('hide');
    for (let i=0; i <4; i++) {
        //store new button in variable
        let newBtn = document.createElement('button');
        //Use the index to find the correct question array and determine if answers are true or false
        if (capitalQuestionIndex <5) {
            btnText = questions[capitalQuestionIndex].answers[i].text;
            answerStatus = questions[capitalQuestionIndex].answers[i].correct;
        } else if (capitalQuestionIndex >= 5 && riverQuestionIndex < 5){
            btnText = riverQuestions[riverQuestionIndex].answers[i].text;
            answerStatus = riverQuestions[riverQuestionIndex].answers[i].correct;
        } else if (riverQuestionIndex >= 5 &&  triviaQuestionIndex < 5) {
            btnText = triviaQuestions[triviaQuestionIndex].answers[i].text;
            answerStatus = triviaQuestions[triviaQuestionIndex].answers[i].correct;
        }
        //Insert answer text in button and add .btn class
        newBtn.innerText = btnText;
        newBtn.classList.add('btn');
        //Ensure button can be clicked by the user
        newBtn.disabled = false;
        //Set the data attribute
        newBtn.dataset.correct = answerStatus;
        if (answerStatus === true) {
            rightAnswer = btnText;
            rightButton = newBtn;
        }
        //Add event listener to button and append to the quiz
        newBtn.addEventListener('click', findUserAnswer);
        answers.appendChild(newBtn);
    }
}

/**
 * Evaluates data from the answer button event listener, disables the buttons,
 * and calls the checkUserAnswer function. 
 */
 function findUserAnswer(e) {
    //Create variables for the user button and selected answer text
    let userButton = e.target;
    let userAnswer = e.target.innerText;
    //Save all the buttons in an array for iteration
    let allButtons = document.querySelectorAll('.btn');
    for (let i =0; i<4; i++) {
        let currentButton = allButtons[i];
        currentButton.disabled = true;
        currentButton.classList.remove('btn');
        currentButton.classList.add('btn-no-hover');
    }  
    if (userAnswer != rightAnswer){
        win = false;
        wrongAnswers++;
    } else if (userAnswer === rightAnswer) {
        win = true;
    }
    if (win === true) {
        userButton.style.background = "green";
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore;
    } else if (win != true) {
        userButton.style.background = "red";
        rightButton.style.background = "green";
        emptyBeer();
    }
    if (wrongAnswers != 3) {
        beginGameBtn.classList.remove('hide');
    }
 }
 /**
 * Replaces full beer image with empty beer image based on number of 
 * wrong answers. 
 */
function emptyBeer() {
    console.log(wrongAnswers);
    if (wrongAnswers === 1) {
        document.getElementById('pint3').src = "assets/images/beer-empty.webp";
        document.getElementById('pint3').alt = "An image of an empty beer pint.";
    }
    if (wrongAnswers === 2) {
        document.getElementById('pint2').src = "assets/images/beer-empty.webp";
        document.getElementById('pint2').alt = "An image of an empty beer pint.";
    }
    if (wrongAnswers === 3) {
        document.getElementById('pint1').src = "assets/images/beer-empty.webp";
        document.getElementById('pint1').alt = "An image of an empty beer pint.";
        setTimeout(gameOver, 1500);
    }
}
/**
 * Clears the answers from screen, makes start over link available and gives
 * the user a message once the game is over. 
 */
 function gameOver() {
    answers.innerHTML = "";
    if (wrongAnswers === 0) {
        questionText.innerHTML = "Amazing result! Please be on my team!";
    } else {
        questionText.innerHTML = "Game Over! Thanks for playing!";
        if (questionIndex < 8) {
        userMessage.innerText = "Play again to improve your score.";
        } 
    }
    startOver.classList.remove('hide');
    beginGameBtn.classList.add('hide'); 
}