let topic = {};
const audioManager = new AudioManager();
const screenManager = new ScreenManager(audioManager);
const menuManager = new MenuManager(audioManager, screenManager);

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
//End: Prevent user press button back in webbroser

(function() {
    function preventBack() {
        history.pushState(null, "", location.href);
    }

    preventBack(); // Đẩy trạng thái vào history khi trang tải

    window.addEventListener("popstate", function () {
        preventBack(); // Đẩy lại trạng thái nếu người dùng nhấn nút back
    });
})();