<?php
$dir = "songs/";
$songs = [];
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
            if (pathinfo($file, PATHINFO_EXTENSION) == 'mp3') {
                $songs[] = $file;
            }
        }
        closedir($dh);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pro Music Player</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAwesome for professional icons -->
    <link rel="stylesheet" href="https://cloudflare.com">
</head>
<body>

<div class="player-container">
    <!-- Album Art / Vinyl -->
    <div class="album-art" id="album-art">
        <i class="fa-solid fa-compact-disc"></i>
    </div>

    <!-- Song Info -->
    <div class="song-info">
        <h2 id="title">Select a song</h2>
        <h3 id="artist">Local Audio</h3>
    </div>

    <!-- Hidden Audio Element -->
    <audio id="audio" src=""></audio>

    <!-- Progress Bar & Timers -->
    <div class="progress-area">
        <span id="current-time">0:00</span>
        <div class="progress-container" id="progress-container">
            <div class="progress" id="progress"></div>
        </div>
        <span id="total-duration">0:00</span>
    </div>

    <!-- Main Controls -->
    <div class="controls">
        <button id="shuffle-btn" title="Shuffle"><i class="fa-solid fa-shuffle"></i></button>
        <button id="prev-btn" title="Previous"><i class="fa-solid fa-backward-step"></i></button>
        <button id="play-btn" class="play-main" title="Play"><i class="fa-solid fa-play"></i></button>
        <button id="next-btn" title="Next"><i class="fa-solid fa-forward-step"></i></button>
        <button id="repeat-btn" title="Repeat"><i class="fa-solid fa-repeat"></i></button>
    </div>

    <!-- Volume Controls -->
    <div class="volume-area">
        <button id="mute-btn"><i class="fa-solid fa-volume-high"></i></button>
        <input type="range" id="volume-slider" min="0" max="1" step="0.05" value="1">
    </div>

    <!-- Playlist -->
    <div class="playlist">
        <h4><i class="fa-solid fa-list"></i> Playlist</h4>
        <ul id="playlist-list">
            <?php foreach ($songs as $index => $song): ?>
                <li class="playlist-item" data-src="songs/<?php echo htmlspecialchars($song); ?>">
                    <span class="song-name"><?php echo htmlspecialchars(pathinfo($song, PATHINFO_FILENAME)); ?></span>
                    <i class="fa-solid fa-play playing-icon"></i>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<script>
    const songList = <?php echo json_encode($songs); ?>;
</script>
<script src="script.js"></script>
</body>
</html>
