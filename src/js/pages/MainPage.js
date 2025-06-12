import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // nếu bạn muốn style sẵn
import { topics, mainScreenMenus, MainMenuType } from '../const.js';
import stickBackground from '../../assets/imgs/stick-background.png';
import stick from '../../assets/imgs/stick.png';
export class MainPage {
    constructor(index, audioManager, screenManager) {
        this.instance = document.getElementById("mainScreen");
        this.audioManager = audioManager;
        this.screenManager = screenManager;
        this.swiper = null;
        this.pageIndex = index;
        this.title = "";
    }
    init() {
        this.instance.innerHTML = '<div class="swiper main-page-item"><div class="screenWrapper swiper-wrapper"></div></div>';
        //lac-lu
        const img2 = document.createElement('img');
        img2.src = stickBackground;
        img2.className = "stick stick-background";
        document.body.appendChild(img2);

        const div = document.createElement('div');
        div.className = "stick";
        const img = document.createElement('img');
        img.src = stick;
        img.className = "lac-lu";
        div.appendChild(img);
        document.body.appendChild(div);
        this.initSwiper('.swiper.main-page-item', '.main-page-item.swiper-pagination');
        this.createShapes();
    }
    update(){
        this.swiper && this.swiper.update();
        const sticks = document.getElementsByClassName('stick');
        Array.from(sticks).forEach((obj) => {
            obj.classList.remove("hide");
        });
    }
    release(){
        const sticks = document.getElementsByClassName('stick');
        Array.from(sticks).forEach((obj) => {
            obj.classList.add("hide");
        });
    }
    createShapes() {
        this.screenManager.loading();
        const screenWrapper = this.instance.getElementsByClassName('screenWrapper')[0];
        const items = mainScreenMenus;
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

            shape.className = 'swiper-slide';
            shape.setAttribute('data-value', items[i].name);
            shape.addEventListener('click', () => {
                this.screenManager.goToTopicPage(items[i].name);
            });
            screenWrapper.appendChild(shape);
        }
        this.screenManager.unLoading();
    }
    initSwiper(swiperClass) {
        this.swiper = new Swiper(swiperClass, {
            slidesPerView: this.screenManager.isLandscape ? 3 : 1,
            spaceBetween: 30
        });
    }
}