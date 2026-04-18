const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.slider');

// 1. Play/Pause Function
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// 2. Update Button Icon
function updateButton() {
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}

// 3. Skip Function
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// 4. Handle Volume & Speed Sliders
function handleRangeUpdate() {
    video[this.name] = this.value;
}

// 5. Update Progress Bar
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// 6. Scrub (Click/Drag progress bar)
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

progress.addEventListener('click', scrub);
