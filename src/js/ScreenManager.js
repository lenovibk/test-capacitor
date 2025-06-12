import { MainPage } from './pages/MainPage.js';
import { TopicPage } from './pages/TopicPage.js'; 
import { PracticePage } from './pages/PracticePage.js';
import { LearningPage } from './pages/LearningPage.js';
import { topics, mainScreenMenus, MainMenuType } from './const.js';
//             spaceBetween: 10,
export class ScreenManager {
    constructor(audioManager) {
        this.wrapper = document.getElementById('wrapper');
        this.mainMenu = document.getElementById('mainMenu');
        this.INDEX_MAIN_PAGE = 1;
        this.INDEX_TOPIC_PAGE = 2;
        this.INDEX_EXEC_PAGE = 3;
        this.mainPage = new MainPage(this.INDEX_MAIN_PAGE, audioManager, this);
        this.topicPage = new TopicPage(this.INDEX_TOPIC_PAGE, audioManager, this);
        this.practicePage = new PracticePage(this.INDEX_EXEC_PAGE, audioManager, this);
        this.learningPage = new LearningPage(this.INDEX_EXEC_PAGE, audioManager, this);
        this.currentPage = null;
        this.currentPageIndex = null;
        this.isLandscape = false;
    }
    goToMainPage(){
        if(this.currentPage != null &&  typeof(this.currentPage.release) === "function"){
            this.currentPage.release();
        }
        this.currentPage = this.mainPage;
        this.goToScreen(this.INDEX_MAIN_PAGE);
    }
    goToTopicPage(type){
        if(this.currentPage != null &&  typeof(this.currentPage.release) === "function"){
            this.currentPage.release();
        }
        this.topicPage.topicType = type;
        this.currentPage = this.topicPage;
        this.goToScreen(this.INDEX_TOPIC_PAGE);
    }
    goToExecutePage(topic){
        if(this.currentPage != null &&  typeof(this.currentPage.release) === "function"){
            this.currentPage.release();
        }
        if(this.topicPage.topicType === MainMenuType.VOCA){
            this.learningPage.topicType = this.topicPage.topicType;
            this.learningPage.topicName = topic;
            this.currentPage = this.learningPage;
        }
        else if(this.topicPage.topicType === MainMenuType.PRACTICE){
            this.practicePage.topicType = this.topicPage.topicType;
            this.practicePage.topicName = topic;
            this.currentPage = this.practicePage;
        }
        this.goToScreen(this.INDEX_EXEC_PAGE);
    }
    goBack(){
        var index = this.currentPageIndex -1;
        if(this.currentPage != null &&  typeof(this.currentPage.release) === "function"){
            this.currentPage.release();
        }
        if(index == this.INDEX_MAIN_PAGE){
            this.currentPage = this.mainPage;
        }
        else if(index == this.INDEX_TOPIC_PAGE){
            this.currentPage = this.topicPage;
        }
        this.goToScreen(index, true);
    }
    goToScreen(index, isGoBack) {
        document.getElementsByClassName("navbar")[0].getElementsByClassName("navbar-title")[0].innerText = this.currentPage.title || '';
        if(index >= this.INDEX_MAIN_PAGE){
            document.getElementsByClassName("navbar")[0].classList.remove("hide");
            if(index === this.INDEX_MAIN_PAGE){
                document.getElementById('btnCloseTopic').classList.add("hide");
            }
            else{
                document.getElementById('btnCloseTopic').classList.remove("hide");
            }
        }
        else{
            document.getElementsByClassName("navbar")[0].classList.add("hide");
        }
        //typeof(this.currentPage.release) === "function" && this.currentPage.release();
        this.currentPageIndex = index;
        const offset = -index * 100; // Dịch chuyển theo %
        this.wrapper.style.transform = `translateX(${offset}vw)`;
        this.mainMenu.classList.add("hide");
        if (!isGoBack && index === this.INDEX_MAIN_PAGE) {
            this.currentPage.init();
        }
        else if (!isGoBack && index === this.INDEX_TOPIC_PAGE) {
            this.currentPage.init();
        } else if (!isGoBack && index === this.INDEX_EXEC_PAGE) {
            this.currentPage.init();
        }
        document.getElementsByClassName("navbar")[0].getElementsByClassName("navbar-title")[0].innerText = this.currentPage.title || '';
        typeof(this.currentPage.update) === "function" && this.currentPage.update();
    }

    checkOrientation() {
        const overlay = document.getElementById("overlay-alert-landscape");
        if (window.innerHeight > window.innerWidth) {
            //overlay.style.display = "flex"; // Show overlay in portrait mode
            this.isLandscape = false;
        } else {
            //overlay.style.display = "none"; // Hide overlay in landscape mode
            this.isLandscape = true;
        }
    }


    toggleVisibility(className, hide) {
        Array.from(document.getElementsByClassName(className)).forEach((obj) => {
            if (hide) {
                obj.classList.add('hide');
            } else {
                obj.classList.remove('hide');
            }
        });
    }
    loading() {
        document.getElementsByClassName('pulse-loader')[0].classList.remove('hide');
    }
    unLoading() {
        document.getElementsByClassName('pulse-loader')[0].classList.add('hide');
    }
}