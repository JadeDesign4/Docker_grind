
// 1. LIST YOUR FILES HERE (Nginx will serve these from /songs/name.mp3)
const songs = [
    "Two Different Worlds(MP3_160K).mp3",
    " until your mine(MP3_160K).mp3",
    " VAI VAI TRAIR - DJ ASUL(MP3_160K).mp3",
    " Vem Vem [GzExS7WybJg].mp3"
];

const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const progress = document.getElementById('progress');
const playlistContainer = document.getElementById('playlist');

let songIndex = 0;

// Load song details
function loadSong(song) {
    title.innerText = song.replace('.mp3', ''); // Clean name for UI
    audio.src = `songs/${song}`; // Paths to your folder
}

// Play/Pause logic
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = '⏸';
    } else {
        audio.pause();
        playBtn.innerText = '▶';
    }
}

// Next/Prev logic
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = '⏸';
    updateActiveUI();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.innerText = '⏸';
    updateActiveUI();
}

// Create the playlist items in HTML
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerText = song.replace('.mp3', '');
    li.addEventListener('click', () => {
        songIndex = index;
        loadSong(songs[songIndex]);
        togglePlay();
        updateActiveUI();
    });
    playlistContainer.appendChild(li);
});

function updateActiveUI() {
    document.querySelectorAll('#playlist li').forEach((li, i) => {
        li.className = (i === songIndex) ? 'active' : '';
    });
}

// Initial Load
loadSong(songs[songIndex]);
updateActiveUI();

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Progress Bar Sync
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
