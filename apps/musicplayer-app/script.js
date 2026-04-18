const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const title = document.getElementById('title');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const playlistItems = document.querySelectorAll('.playlist-item');

let songIndex = 0;

// Load initial song if available
if(songList.length > 0) {
    loadSong(songIndex);
}

function loadSong(index) {
    if(songList.length === 0) return;
    
    // Remove active class from all items
    playlistItems.forEach(item => item.classList.remove('active'));
    
    const selectedItem = playlistItems[index];
    selectedItem.classList.add('active');
    
    title.innerText = selectedItem.innerText;
    audio.src = selectedItem.getAttribute('data-src');
}

function playSong() {
    playBtn.innerText = '⏸';
    audio.play();
}

function pauseSong() {
    playBtn.innerText = '▶';
    audio.pause();
}

// Play/Pause Click
playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.innerText === '⏸';
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Prev Song
prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songList.length) % songList.length;
    loadSong(songIndex);
    playSong();
});

// Next Song
nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songList.length;
    loadSong(songIndex);
    playSong();
});

// Update Progress Bar
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Click on Progress Bar
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
});

// Click Playlist Item
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        songIndex = index;
        loadSong(songIndex);
        playSong();
    });
});

// Autoplay Next Song
audio.addEventListener('ended', () => {
    nextBtn.click();
});
