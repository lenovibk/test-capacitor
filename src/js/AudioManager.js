import { Howl } from 'howler';
import { Toast } from '@capacitor/toast';

// Import audio files
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
        this.soundQueue = [];
        this.queuePromiseResolve = null;
        this.backgroundMusic = null;
        this.isMusicPlaying = true;
    }

    preloadAudio() {
        this.audioFiles = {
            bat_dau: new Howl({ src: [audio_bat_dau], html5: true }),
            nhac_nen: new Howl({ src: [audio_nhac_nen], html5: true }),
            bat_dau_tim: new Howl({ src: [audio_bat_dau_tim], html5: true }),
            chon_cho_me: new Howl({ src: [audio_chon_cho_me], html5: true }),
            hoc_tiep_nhe: new Howl({ src: [audio_hoc_tiep_nhe], html5: true }),
            dung_roi_khen: new Howl({ src: [audio_dung_roi_khen], html5: true }),
            sai_chon_lai: new Howl({ src: [audio_sai_chon_lai] , html5: true}),
            good: new Howl({ src: [audio_good], html5: true }),
            wrong: new Howl({ src: [audio_wrong] , html5: true}),
            click: new Howl({ src: [audio_click], html5: true }),
            nao: new Howl({ src: [audio_nao] , html5: true}),
            nhe: new Howl({ src: [audio_nhe], html5: true }),
            logo_effect: new Howl({ src: [audio_logo_effect] , html5: true}),
        };
    }

    preloadAudioTopic(topic) {
        topic.items.forEach((item) => {
            const key = `topic_${topic.name}_${item.name}`;
            this.audioFiles[key] = new Howl({ src: [item.audioFile], html5: true });
        });
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
            if (this.queuePromiseResolve) {
                this.queuePromiseResolve();
                this.queuePromiseResolve = null;
            }
            return;
        }

        const soundKey = this.soundQueue.shift();
        this.playSound(soundKey, this.processSoundQueue.bind(this));
    }

    playSound(key, callback) {
        const audio = this.audioFiles[key];
        if (!audio) {
            console.warn(`Sound not found: ${key}`);
            if (callback) callback();
            return;
        }

        this.isSoundPlaying = true;
        audio.play();
        audio.once('end', () => {
            this.isSoundPlaying = false;
            if (callback) callback();
        });
    }

    stopAllSounds() {
        for (let key in this.audioFiles) {
            const audio = this.audioFiles[key];
            if (audio && typeof audio.stop === 'function') {
                audio.stop();
            }
        }
        this.isSoundPlaying = false;
        this.soundQueue = [];
        if (this.queuePromiseResolve) {
            this.queuePromiseResolve();
            this.queuePromiseResolve = null;
        }
    }

    playBackgroundMusic() {
        this.backgroundMusic = this.audioFiles['nhac_nen'];
        if (this.backgroundMusic) {
            this.backgroundMusic.volume(0.05);
            this.backgroundMusic.loop(true);
            this.backgroundMusic.play();
        }
    }

    camThan() {
        return Math.random() < 0.5 ? 'nhe' : 'nao';
    }

    async showToast(message) {
        await Toast.show({ text: message });
    }
}