const questions = [
    { q: "What does DOM stand for?", a: ["Document Object Model", "Data Object Mode", "Direct Order Mail"], correct: 0 },
    { q: "Which symbol is used for comments in JS?", a: ["<!--", "//", "/*"], correct: 1 },
    { q: "Which keyword declares a constant variable?", a: ["var", "let", "const"], correct: 2 }
];

let currentIdx = 0, score = 0, timeLeft = 15, timer;

const startBtn = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question');
const answerBox = document.getElementById('answer-buttons');
const timerEl = document.querySelector('#timer span');

startBtn.onclick = () => {
    startScreen.classList.add('hide');
    quizScreen.classList.remove('hide');
    showQuestion();
    startTimer();
};

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function showQuestion() {
    resetState();
    let q = questions[currentIdx];
    questionEl.innerText = q.q;
    q.a.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.innerText = ans;
        btn.onclick = () => selectAnswer(i === q.correct, btn);
        answerBox.appendChild(btn);
    });
}

function selectAnswer(isCorrect, btn) {
    if (isCorrect) {
        score++;
        btn.classList.add('correct');
        document.getElementById('score').innerText = `Score: ${score}`;
    } else {
        btn.classList.add('wrong');
    }
    
    // Brief pause then next question
    setTimeout(() => {
        currentIdx++;
        if (currentIdx < questions.length) showQuestion();
        else endGame();
    }, 1000);
}

function resetState() {
    while (answerBox.firstChild) answerBox.removeChild(answerBox.firstChild);
}

function endGame() {
    clearInterval(timer);
    quizScreen.classList.add('hide');
    resultScreen.classList.remove('hide');
    document.getElementById('final-score').innerText = score;
}
