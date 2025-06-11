import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // nếu bạn muốn style sẵn
import { topics, mainScreenMenus, MainMenuType } from '../const.js';
export class LearningPage {
  constructor(index, audioManager, screenManager) {
    this.instance = document.getElementById("executionScreen");
    this.audioManager = audioManager;
    this.screenManager = screenManager;
    this.swiper = null;
    this.swiper2 = null;
    this.pageIndex = index;
    this.lastAudio = null;
  }
  init() {
    this.lastAudio = null;
    let items = topics.find(u => u.name === this.topicName).items;
    if (items.length === 0) {
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
  }
  update() {
    this.swiper && this.swiper.update();
    this.swiper2 && this.swiper2.update();
  }
  release() {

  }
  createShapes() {
    this.screenManager.loading();
    this.audioManager.preloadAudioTopic(topics.find(u => u.name === this.topicName));
    const screenWrapper = this.instance.getElementsByClassName('swiper-wrapper')[0];
    const screenWrapper2 = this.instance.getElementsByClassName('swiper-wrapper')[1];
    const items = topics.find(u => u.name === this.topicName).items;
    for (let i = 0; i < items.length; i++) {
      const shape1 = document.createElement('div');
      const img1 = shape1.appendChild(document.createElement('img'));
      img1.src = items[i].image; 
      img1.className = "shadow";
      shape1.className = 'swiper-slide';
      shape1.setAttribute('data-value', items[i].name);
      shape1.addEventListener('click', () => {

      });
      screenWrapper.appendChild(shape1);

      const shape2 = document.createElement('div');
      const img2 = shape2.appendChild(document.createElement('img'));
      img2.src = items[i].image;
      img2.className = "shadow";
      shape2.className = 'swiper-slide item';
      shape2.setAttribute('data-value', items[i].name);
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
      const currentAudio = `topic_${this.topicName}_${name}`;
      if(name && currentAudio != this.lastAudio){
        this.lastAudio =  currentAudio;
        this.audioManager.stopAllSounds(); // Stop all currently playing sounds
        this.audioManager.playSoundQueue([currentAudio]);
      }
    });
  }
}