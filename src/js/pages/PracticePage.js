export class PracticePage {
    constructor(index, audioManager, screenManager) {
        this.instance = document.getElementById("executionScreen");
        this.audioManager = audioManager;
        this.screenManager = screenManager;
        this.topic = {};
        this.reminderInterval = null;
        this.canChoise = true;
        this.pageIndex = index;
        this.lastQuestion = [];
        this.forceClose = false;
        this.items = [];
    }
    
    init() {
        this.forceClose = false;
        this.lastQuestion = [];
fetch('https://vuihoc.vietapp.info/api/public_items.php?lang=vi&topic=' + this.topicName)
      .then(res => res.json())
      .then(data => {
        this.items = data;
         if (this.items.length === 0) {
            this.instance.innerHTML = '<div class="building-content-alert">Chủ đề đang được xây dựng <br/> Vui lòng chọn chủ đề khác</div>';
        }
        else {
            this.instance.innerHTML = '<div class="screenWrapper container"></div>';
            this.createShapes();
        }
      })
      .catch(e => {
      });
    }

    release() {
        this.forceClose = true;
        this.audioManager.stopAllSounds(); // Stop all currently playing sounds
        this.reminderInterval != null && clearInterval(this.reminderInterval);
    }

    createShapes() {
        this.screenManager.loading();
        this.audioManager.preloadAudioTopic(this.items);
        this.canChoise = true;
        const screenWrapper = this.instance.getElementsByClassName('screenWrapper')[0];
        screenWrapper.innerHTML = ''; // Clear previous shapes
        screenWrapper.classList.remove('result');
        this.items = this.items.sort(() => Math.random() - 0.5).slice(0, 8); // Shuffle the colors array
        let targetItem;
        for (let attempt = 0; attempt < 5; attempt++) { //Kiểm tra câu hỏi không trùng trước đó. Lặp tối đa 5 lần
            const c = Math.floor(Math.random() * this.items.length);
            targetItem = this.items[c].id;
            if (!this.lastQuestion.includes(targetItem)) {
            break;
            }
        }
        this.lastQuestion.push(targetItem);
        this.reminderInterval && clearInterval(this.reminderInterval);
        this.reminderInterval = setInterval(() => {
            this.audioManager.playSoundQueue(['chon_cho_me', `topic_${targetItem}`]);
        }, 15000);
        for (let i = 0; i < this.items.length; i++) {
            const shape = document.createElement('div');
            const img = shape.appendChild(document.createElement('img'));
            img.src = this.items[i].img_feature;
            shape.className = 'item shadow';
            shape.setAttribute('data-value', this.items[i].id);
            shape.addEventListener('click', () => {
                if (!this.canChoise) return;
                if (shape.getAttribute('data-value') === targetItem) {
                    this.canChoise = false;
                    clearInterval(this.reminderInterval); // Clear the reminder interval if a shape is clicked
                    const shapes = screenWrapper.querySelectorAll('.item');
                    shapes.forEach(s => {
                        if (s !== shape) {
                            s.classList.toggle("hidden");
                        }
                    });
                    screenWrapper.classList.add('result');
                    shape.classList.add('enlarge');
                    this.audioManager.stopAllSounds();
                    this.audioManager.playSoundQueue(['good', 'dung_roi_khen', 'hoc_tiep_nhe']).then(() => {
                        !this.forceClose && this.createShapes();
                    });
                } else {
                    shape.classList.remove('shake'); // Remove the class first to reset the animation
                    void shape.offsetWidth; // Trigger reflow to restart the animation
                    shape.classList.add('shake');
                    this.audioManager.stopAllSounds();
                    this.audioManager.playSoundQueue(['wrong', 'sai_chon_lai']);
                }
            });
            screenWrapper.appendChild(shape);
        }
        this.screenManager.unLoading();
        this.audioManager.stopAllSounds();
        this.audioManager.playSoundQueue(['bat_dau_tim', `topic_${targetItem}`]);
    }
}