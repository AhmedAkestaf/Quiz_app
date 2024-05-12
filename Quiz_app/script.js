const questions = [
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ]
    },
    {
        question: "Who is known as the 'Father of Geometry'?",
        answers: [
            {text: "Pythagoras", correct: false},
            {text: "Euclid", correct: true},
            {text: "Archimedes", correct: false},
            {text: "Aristotle", correct: false},
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        answers: [
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: true},
            {text: "Mercury", correct: false},
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            {text: "J.K. Rowling", correct: false},
            {text: "Harper Lee", correct: true},
            {text: "Stephen King", correct: false},
            {text: "J.R.R. Tolkien", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Fe", correct: false},
            {text: "Cu", correct: false},
        ]
    },
    {
        question: "Which country is famous for the Great Wall?",
        answers: [
            {text: "India", correct: false},
            {text: "China", correct: true},
            {text: "Russia", correct: false},
            {text: "Japan", correct: false},
        ]
    },
    {
        question: "Who is the author of '1984'?",
        answers: [
            {text: "George Orwell", correct: true},
            {text: "Ray Bradbury", correct: false},
            {text: "H.G. Wells", correct: false},
            {text: "Aldous Huxley", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            {text: "H2O", correct: true},
            {text: "CO2", correct: false},
            {text: "NaCl", correct: false},
            {text: "O2", correct: false},
        ]
    },
    {
        question: "Who is the Greek goddess of wisdom?",
        answers: [
            {text: "Athena", correct: true},
            {text: "Artemis", correct: false},
            {text: "Hera", correct: false},
            {text: "Aphrodite", correct: false},
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {text: "China", correct: false},
            {text: "Japan", correct: true},
            {text: "South Korea", correct: false},
            {text: "Vietnam", correct: false},
        ]
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            {text: "Leonardo da Vinci", correct: true},
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Michelangelo", correct: false},
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Melbourne", correct: false},
            {text: "Sydney", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false},
        ]
    },
    {
        question: "Who was the first man to step on the moon?",
        answers: [
            {text: "Neil Armstrong", correct: true},
            {text: "Buzz Aldrin", correct: false},
            {text: "Yuri Gagarin", correct: false},
            {text: "Alan Shepard", correct: false},
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            {text: "Tomatoes", correct: false},
            {text: "Avocado", correct: true},
            {text: "Onions", correct: false},
            {text: "Cilantro", correct: false},
        ]
    },
    {
        question: "Which continent is the largest by land area?",
        answers: [
            {text: "Africa", correct: false},
            {text: "Asia", correct: true},
            {text: "North America", correct: false},
            {text: "Europe", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0 ;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex] ;
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click" , selectAnswer)

   }

   ); 
}

function resetState(){

    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct") ;
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;

    });
    nextButton.style.display = "block" ;

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }

});

startQuiz();