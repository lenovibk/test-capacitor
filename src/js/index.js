import { AudioManager } from './AudioManager.js';
import { ScreenManager } from './ScreenManager.js';
import { MenuManager } from './MenuManager.js';
import { SplashScreen } from '@capacitor/splash-screen';
import { Camera } from '@capacitor/camera';

//End: Prevent user press button back in webbroser

(function () {
    function preventBack() {
        history.pushState(null, "", location.href);
    }

    preventBack(); // Đẩy trạng thái vào history khi trang tải

    window.addEventListener("popstate", function () {
        preventBack(); // Đẩy lại trạng thái nếu người dùng nhấn nút back
    });
})();

window.customElements.define(
    'capacitor-welcome',
    class extends HTMLElement {
        constructor() {
            super();

            SplashScreen.hide();

            //const root = this.attachShadow({ mode: 'open' });
            if (document.getElementById("mainScreen") == null) {
                document.body.innerHTML += `<nav id="mainMenu" class="menu_conner hide" style="--hue: 348.9213247976287">
      <input class="menu_conner__toggle" id="menu-toggle" type="checkbox" />
      <label class="menu_conner__toggle-label" for="menu-toggle"></label>
      <label class="menu_conner__toggle-label menu_conner__toggle-label--closer" for="menu-toggle">
        <svg class="menu_conner__icon" preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
        </svg>
        <svg class="menu_conner__icon" preserveAspectRatio="xMinYMin" viewBox="0 0 24 24">
          <path
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
          </path>
        </svg>
      </label>
      <ul class="menu_conner__content">
        <li class="menu_conner__item" style="--x: 15; --y: 16;">
          <lord-icon src="https://cdn.lordicon.com/cnpvyndp.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 67; --y: 29;">
          <lord-icon src="https://cdn.lordicon.com/xyboiuok.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 11; --y: 56;">
          <lord-icon src="https://cdn.lordicon.com/pqirzoux.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 46; --y: 81;">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 55; --y: 11;">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 76; --y: 51;">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 26; --y: 71;">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
        <li class="menu_conner__item" style="--x: 86; --y: 11;">
          <lord-icon src="https://cdn.lordicon.com/lecprnjb.json" trigger="loop" state="hover-roll" colors="primary:#e8308c"
            style="width:250px;height:250px">
          </lord-icon>
        </li>
      </ul>
    </nav>
    <svg style="position: absolute; left: 100%">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="BLUR"></feGaussianBlur>
          <feColorMatrix in="BLUR" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="GOO">
          </feColorMatrix>
          <feBlend in="SourceGraphic" in2="goo"></feBlend>
        </filter>
      </defs>
    </svg>
    <div class="pulse-loader hide"></div>
  </div>
  <nav class="navbar hide">
    <div class="navbar-left">
      <div id="btnCloseTopic"></div>
    </div>
    <div class="navbar-center">
        <span class="navbar-title"></span>
    </div>
    <div class="navbar-right">
      
      <button id="toggleMusicButton" class="icon-button hide "></button>
    </div>
</nav>
    <div class="main-container">
    <div class="wrapper" id="wrapper">
      <div class="screen" id="startScreen">
        
      </div>
      <div class="screen center-v" id="mainScreen">
      </div>
      <div class="screen" id="topicScreen">
      </div>
      <div class="screen" id="executionScreen">
      </div>
    </div>
  </div>
    `;
                let topic = {};
                const audioManager = new AudioManager();
                const screenManager = new ScreenManager(audioManager);
                const menuManager = new MenuManager(audioManager, screenManager);
                screenManager.goToMainPage();
                document.addEventListener('DOMContentLoaded', () => {
                    audioManager.preloadAudio();
                });

                // Check landscape on initial load
                screenManager.checkOrientation();

                // Listen for screen resize events to check landscape 
                window.addEventListener("resize", screenManager.checkOrientation);


                //Begin: Prevent user press button back in webbroser
                window.history.pushState(null, "", window.location.href);
                window.addEventListener("popstate", function () {
                    window.history.pushState(null, "", window.location.href);
                });

                window.addEventListener("beforeunload", function (event) {
                    event.preventDefault();
                });
            }
        }

        // connectedCallback() {
        //   const self = this;

        //   self.shadowRoot.querySelector('#take-photo').addEventListener('click', async function (e) {
        //     try {
        //       const photo = await Camera.getPhoto({
        //         resultType: 'uri',
        //       });

        //       const image = self.shadowRoot.querySelector('#image');
        //       if (!image) {
        //         return;
        //       }

        //       image.src = photo.webPath;
        //     } catch (e) {
        //       console.warn('User cancelled', e);
        //     }
        //   });
        // }
    },
);

// window.customElements.define(
//   'capacitor-welcome-titlebar',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       const root = this.attachShadow({ mode: 'open' });
//       root.innerHTML = `
//     <style>
//       :host {
//         position: relative;
//         display: block;
//         padding: 15px 15px 15px 15px;
//         text-align: center;
//         background-color: #73B5F6;
//       }
//       ::slotted(h1) {
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//         font-size: 0.9em;
//         font-weight: 600;
//         color: #fff;
//       }
//     </style>
//     <slot></slot>
//     `;
//     }
//   },
// );
