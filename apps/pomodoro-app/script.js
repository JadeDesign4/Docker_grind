let timeLeft;
let timerId = null;
let isWorkMode = true;
let totalTime;

const timeDisplay = document.getElementById('time-left');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');
const statusText = document.getElementById('status-text');
const modeBtns = document.querySelectorAll('.mode-btn');
const circle = document.querySelector('.progress-ring__circle');

const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = 0;

function updateProgress(percent) {
    const offset = circumference - (percent / 100 * circumference);
    circle.style.strokeDashoffset = offset;
}

function setTimer(minutes) {
    clearInterval(timerId);
    timerId = null;
    timeLeft = minutes * 60;
    totalTime = timeLeft;
    updateDisplay();
    updateProgress(100);
    startPauseBtn.textContent = 'Start';
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startPauseBtn.textContent = 'Start';
    } else {
        startPauseBtn.textContent = 'Pause';
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            updateProgress((timeLeft / totalTime) * 100);
            
            if (timeLeft === 0) {
                clearInterval(timerId);
                alert("Time's up!");
            }
        }, 1000);
    }
}

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        statusText.textContent = btn.textContent;
        setTimer(parseInt(btn.dataset.time));
    });
});

startPauseBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', () => setTimer(parseInt(document.querySelector('.mode-btn.active').dataset.time)));

// Initialize
setTimer(25);

// ... existing variables ...
const alarm = document.getElementById('alarm-sound');

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        startPauseBtn.textContent = 'Start';
    } else {
        startPauseBtn.textContent = 'Pause';
        timerId = setInterval(() => {
            timeLeft--;
            updateDisplay();
            updateProgress((timeLeft / totalTime) * 100);
            
            if (timeLeft <= 0) {
                clearInterval(timerId);
                timerId = null;
                alarm.play(); // This triggers the notification sound
                startPauseBtn.textContent = 'Start';
                
                // Visual feedback when finished
                statusText.textContent = "Session Finished!";
                setTimeout(() => alert("Time is up! Take a break or get back to work."), 500);
            }
        }, 1000);
    }
}
