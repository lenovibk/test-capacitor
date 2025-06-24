export class LearningPage {
  constructor(index, audioManager, screenManager) {
    this.instance = document.getElementById("executionScreen");
    this.audioManager = audioManager;
    this.screenManager = screenManager;
    this.swiper = null;
    this.swiper2 = null;
    this.pageIndex = index;
    this.lastAudio = null;
    this.items = [];
  }
  init() {
    this.lastAudio = null;
    fetch('https://vuihoc.vietapp.info/api/public_items.php?lang=vi&topic=' + this.topicName)
      .then(res => res.json())
      .then(data => {
        this.items = data;
        if (this.items.length === 0) {
          this.instance.innerHTML = '<div class="building-content-alert">Chủ đề đang được xây dựng <br/> Vui lòng chọn chủ đề khác</div>';
        }
        else {
          this.instance.innerHTML = `<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper imageSwiper imageSwiperMain">
    <div class="swiper-wrapper">
    </div>
  </div>
  <div thumbsSlider="" class="swiper imageSwiper imageSwiperThumb">
    <div class="swiper-wrapper">
    </div>
  </div>`;
          this.createShapes();
          this.initSwiper();
        }
      })
      .catch(e => {
      });
  }
  update() {
    this.swiper && this.swiper.update();
    this.swiper2 && this.swiper2.update();
  }
  release() {

  }
  createShapes() {
    this.screenManager.loading();
    this.audioManager.preloadAudioTopic(this.items);
    const screenWrapper = this.instance.getElementsByClassName('swiper-wrapper')[0];
    const screenWrapper2 = this.instance.getElementsByClassName('swiper-wrapper')[1];

    for (let i = 0; i < this.items.length; i++) {
      const shape1 = document.createElement('div');
      const img1 = shape1.appendChild(document.createElement('img'));
      img1.src = this.items[i].img_feature;
      img1.className = "shadow";
      shape1.className = 'swiper-slide';
      shape1.setAttribute('data-value', this.items[i].id);
      shape1.addEventListener('click', () => {
      });
      screenWrapper.appendChild(shape1);

      const shape2 = document.createElement('div');
      const img2 = shape2.appendChild(document.createElement('img'));
      img2.src = this.items[i].img_feature;
      img2.className = "shadow";
      shape2.className = 'swiper-slide item';
      shape2.setAttribute('data-value', this.items[i].id);
      screenWrapper2.appendChild(shape2);
    }
    this.screenManager.unLoading();
  }
  initSwiper() {
    this.swiper = new Swiper(".imageSwiperThumb", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: this.screenManager.isLandscape ? 6 : 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    this.swiper2 = new Swiper(".imageSwiperMain", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      thumbs: {
        swiper: this.swiper,
      },
    });

    this.swiper2.on('slideChange', () => {
      var name = document.getElementsByClassName('imageSwiperMain')[0].getElementsByClassName('swiper-slide')[this.swiper2.activeIndex]
        .getAttribute('data-value');
      const currentAudio = `topic_${name}`;
      if (name && currentAudio != this.lastAudio) {
        this.lastAudio = currentAudio;
        this.audioManager.stopAllSounds(); // Stop all currently playing sounds
        this.audioManager.playSoundQueue([currentAudio]);
      }
    });
  }
}