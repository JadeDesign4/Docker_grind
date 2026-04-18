const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

let isPlaying = false;

// Play or Pause function
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playBtn.innerText = 'Play';
    } else {
        audio.play();
        playBtn.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress on click
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
