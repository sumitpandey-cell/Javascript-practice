const quizzes = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Lisbon"],
        "answer": "Paris"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars"
    },
    {
        "question": "Who wrote 'To Kill a Mockingbird'?",
        "options": ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        "answer": "Harper Lee"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean"
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "answer": "Au"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "What is the smallest country in the world?",
        "options": ["Monaco", "Nauru", "San Marino", "Vatican City"],
        "answer": "Vatican City"
    },
    {
        "question": "Which element has the atomic number 1?",
        "options": ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
        "answer": "Hydrogen"
    },
    {
        "question": "In which year did the Titanic sink?",
        "options": ["1912", "1905", "1923", "1918"],
        "answer": "1912"
    },
    {
        "question": "Who developed the theory of relativity?",
        "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        "answer": "Albert Einstein"
    }
]

const quizQuestion = document.querySelector('.question')
const quizOption = document.querySelectorAll("#opt");
const nextBtn = document.querySelector('.nextbtn')
const para = document.querySelector('.para')
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(num){
    currentQuestionIndex = num;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = quizzes[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    quizQuestion.innerHTML = questionNo+". "+currentQuestion.question;
    let num=0;
    while(num<4){
        quizOption[num].innerHTML = currentQuestion.options[num]
        num = num+1;
    }
    quizOption.forEach(ele=>{
        ele.addEventListener('click',selectOption);
    })
}

function selectOption(e){
    if(e.target.textContent == quizzes[currentQuestionIndex].answer){
        e.target.classList.add("correct");
        score = score+1;
    }
    else{
        e.target.classList.add("incorrect");
    }
    quizOption.forEach(ele=>{
        if(ele.textContent == quizzes[currentQuestionIndex].answer){
            ele.classList.add("correct");
        }
        ele.disabled = true;
    })
    nextBtn.style.display = 'block'
    nextBtn.addEventListener('click', change)
}

function change(){
    currentQuestionIndex = currentQuestionIndex+1;
    if(currentQuestionIndex >= quizzes.length){
        endQuiz();
    }
    else{
        startQuiz(currentQuestionIndex)
        reset();
    }
}
function endQuiz()
{
    quizOption.forEach(ele=>{
        ele.style.display='none';
    })
    quizQuestion.style.display = 'none';
    console.log(score);
    para.innerHTML = `Your score is ${score} out of ${quizzes.length}`
    nextBtn.style.display = 'none';
}
function reset(){
    quizOption.forEach(ele=>{
        ele.classList.remove('correct')
        ele.classList.remove('incorrect')
        ele.disabled = false;
    })
}


startQuiz(0);


