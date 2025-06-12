import audio_bat_dau from '../assets/audio/bat_dau_thoi_nao.mp3';
import audio_nhac_nen from '../assets/audio/nhac-nen-chinh.mp3';
import audio_bat_dau_tim from '../assets/audio/bat_dau_tim.mp3';
import audio_chon_cho_me from '../assets/audio/chon_cho_me.mp3';
import audio_hoc_tiep_nhe from '../assets/audio/hoc_tiep_nhe.mp3';
import audio_dung_roi_khen from '../assets/audio/dung_roi_khen.mp3';
import audio_sai_chon_lai from '../assets/audio/sai_chon_lai.mp3';
import audio_good from '../assets/audio/good.mp3';
import audio_wrong from '../assets/audio/wrong.mp3';
import audio_click from '../assets/audio/pick.mp3';
import audio_nao from '../assets/audio/nao.mp3';
import audio_nhe from '../assets/audio/nhe.mp3';
import audio_logo_effect from '../assets/audio/logo-effect.mp3';
export class AudioManager {
    constructor() {
        this.audioFiles = {};
        this.isSoundPlaying = false;
        this.soundQueue = []; // Global sound queue
        this.queuePromiseResolve = null; // Resolve function for the queue promise
        this.backgroundMusic = null;
        this.isMusicPlaying = true;
    }

    preloadAudio() {
        // Generate audio files
        this.audioFiles.bat_dau = new Audio(audio_bat_dau);
        this.audioFiles.nhac_nen = new Audio(audio_nhac_nen);
        this.audioFiles.bat_dau_tim = new Audio(audio_bat_dau_tim);
        this.audioFiles.chon_cho_me = new Audio(audio_chon_cho_me);
        this.audioFiles.hoc_tiep_nhe = new Audio(audio_hoc_tiep_nhe);
        this.audioFiles.dung_roi_khen = new Audio(audio_dung_roi_khen);
        this.audioFiles.sai_chon_lai = new Audio(audio_sai_chon_lai);
        this.audioFiles.good = new Audio(audio_good);
        this.audioFiles.wrong = new Audio(audio_wrong);
        this.audioFiles.click = new Audio(audio_click);
        this.audioFiles.nao = new Audio(audio_nao);
        this.audioFiles.nhe = new Audio(audio_nhe);
        this.audioFiles.logo_effect = new Audio(audio_logo_effect);
        
        // Preload all audio files
        for (let key in this.audioFiles) {
            this.audioFiles[key].load();
        }
    }

    preloadAudioTopic(topic) {
        // Topic audio files
        topic.items.forEach((item) => {
            this.audioFiles[`topic_${topic.name}_${item.name}`] = new Audio(item.audioFile);
        });

        // Preload all audio files
        for (let key in this.audioFiles) {
            this.audioFiles[key].load();
        }
    }

    playSoundQueue(queue) {
        return new Promise((resolve) => {
            this.soundQueue = this.soundQueue.concat(queue);
            this.queuePromiseResolve = resolve;
            this.processSoundQueue();
        });
    }

    processSoundQueue() {
        if (this.soundQueue.length === 0) {
            if (this.soundQueue.length === 0 && this.queuePromiseResolve) {
                this.queuePromiseResolve();
                this.queuePromiseResolve = null;
            }
            return;
        }

        const soundKey = this.soundQueue.shift();
        this.playSound(soundKey, this.processSoundQueue.bind(this));
    }

    playBackgroundMusic() {
        this.backgroundMusic = this.audioFiles['nhac_nen'];
        // this.backgroundMusic.volume = 0.05; // Set volume to a low level
        // this.backgroundMusic.loop = true; // Loop the background music
        // this.backgroundMusic.play().catch((e) => {
        //     console.error('Error playing background music:', e);
        // });
    }

    camThan() {
        const randomSound = Math.random() < 0.5 ? 'nhe' : 'nao';
        return randomSound;
    }

    playSound(key, callback) {
        const audio = this.audioFiles[key];
        this.isSoundPlaying = true;
        audio.play().then(() => {
            audio.addEventListener('ended', () => {
                this.isSoundPlaying = false;
                if (callback) callback();
            }, { once: true });
        }).catch((e) => {
            console.error(`Error playing audio file: ${key}`, e);
            this.isSoundPlaying = false;
            if (callback) callback();
        });
    }

    // New method to stop all sounds
    stopAllSounds() {
        for (let key in this.audioFiles) {
            const audio = this.audioFiles[key];
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset the playback position to the start
        }
        this.isSoundPlaying = false;
        this.soundQueue = []; // Clear the sound queue
        if (this.queuePromiseResolve) {
            this.queuePromiseResolve(); // Resolve any pending promises
            this.queuePromiseResolve = null;
        }
    }
}