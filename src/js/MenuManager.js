export class MenuManager {
    constructor(audioManager, screenManager) {
        this.audioManager = audioManager;
        this.screenManager = screenManager;
        this.reminderInterval = this.reminderInterval;
        this.initEventListeners();
    }

    toggleBackgroundMusic() {
        if (this.audioManager.isMusicPlaying) {
            this.audioManager.backgroundMusic.pause();
            document.getElementById('toggleMusicButton').classList.add("off");
        } else {
            this.audioManager.backgroundMusic.play().catch((e) => {
                console.error('Error playing background music:', e);
            });
            document.getElementById('toggleMusicButton').classList.remove("off");
        }
        this.audioManager.isMusicPlaying = !this.audioManager.isMusicPlaying;
    }

    initEventListeners() {
        // document.getElementById('startButton').addEventListener('click', () => {
        //     document.getElementById("play").classList.toggle('goDown');
        //     this.audioManager.playBackgroundMusic();
        //     //document.getElementById("toggleMusicButton").classList.remove('hide');
        //     this.screenManager.goToMainPage();
        // });

        document.getElementById('btnCloseTopic').addEventListener('click', () => {
            this.screenManager.goBack();
        });

        document.getElementById('toggleMusicButton').addEventListener('click', () => {
            this.toggleBackgroundMusic();
        });
    }
}