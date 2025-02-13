// script.js (Enhanced Audio Player)
const audio = document.getElementById('palestine-speech');
        const playPauseButton = document.getElementById('play-pause');
        const muteUnmuteButton = document.getElementById('mute-unmute');
        const progressBar = document.getElementById('progress-bar');
        const progress = document.getElementById('progress');
        const volumeSlider = document.getElementById('volume-slider');

        let isPlaying = false;
        let isMuted = false;

        playPauseButton.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playPauseButton.textContent = 'Play';
            } else {
                audio.play();
                playPauseButton.textContent = 'Pause';
            }
            isPlaying = !isPlaying;
        });

        muteUnmuteButton.addEventListener('click', () => {
            isMuted = !isMuted;
            audio.muted = isMuted;
            muteUnmuteButton.textContent = isMuted ? 'Unmute' : 'Mute';
        });


        audio.addEventListener('timeupdate', () => {
            const progressPercentage = (audio.currentTime / audio.duration) * 100;
            progress.style.width = progressPercentage + '%';
        });

        progressBar.addEventListener('click', (event) => {
            const totalWidth = progressBar.offsetWidth;
            const clickedPosition = event.offsetX;
            const newTime = (clickedPosition / totalWidth) * audio.duration;
            audio.currentTime = newTime;
        });

        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });

// Add more advanced controls (volume, progress, etc.) as needed.