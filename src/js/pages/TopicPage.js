import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // nếu bạn muốn style sẵn
import { topics, mainScreenMenus, MainMenuType } from '../const.js';
export class TopicPage {
    constructor(index, audioManager, screenManager) {
        this.instance = document.getElementById("topicScreen");
        this.audioManager = audioManager;
        this.screenManager = screenManager;
        this.swiper = null;
        this.pageIndex = index;
        this.title = "";
    }
    init() {
        if(this.topicType === MainMenuType.VOCA || this.topicType === MainMenuType.PRACTICE){
            this.title = "Chủ đề";
            this.instance.innerHTML = '<div class="swiper topic-page-item"><div class="screenWrapper swiper-wrapper"></div></div>';
            this.initSwiper('.swiper.topic-page-item');
            this.createShapes();
        }
        else {
            this.title = mainScreenMenus.find(u => u.name === this.topicType).description;
            debugger
            this.instance.innerHTML = '<div class="building-content-alert">Chức năng đang được xây dựng <br/> Vui lòng chọn chức năng khác</div>';
        }
    }
    update() {
        this.swiper && this.swiper.update();
    }
    release() {

    }
    createShapes() {
        this.screenManager.loading();
        const screenWrapper = this.instance.getElementsByClassName('screenWrapper')[0];
        const items = topics;
        for (let i = 0; i < items.length; i++) {
            const shape = document.createElement('div');
            const itemContain = document.createElement('div');
            itemContain.className = "item-container shadow";
            shape.appendChild(itemContain);
            const img = itemContain.appendChild(document.createElement('img'));
            img.src = items[i].featureImage;

            const divName = itemContain.appendChild(document.createElement('div'));
            divName.className = "title-text";
            divName.innerText = items[i].description;

            shape.className = 'swiper-slide item';
            shape.setAttribute('data-value', items[i].name);
            shape.addEventListener('click', () => {
                this.screenManager.goToExecutePage(items[i].name);
            });

            screenWrapper.appendChild(shape);
        }
        this.screenManager.unLoading();
    }
    initSwiper(swiperClass) {
        this.swiper = new Swiper(swiperClass, {
            slidesPerView: this.screenManager.isLandscape ? 4 : 1,
            grid: {
                rows: 2,
            },
            spaceBetween: 10
        });
    }
}