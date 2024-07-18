import './index.css';


function init() {
    var video = document.getElementById("video-intro");
    var intro = document.getElementById("intro");
    var subtitle = document.getElementById("subtitle");
    var logoNav = document.getElementById("logo-nav");

    video.addEventListener('loadeddata', (e) => {
        //Video should now be loaded but we can add a second check
        console.log('Video is loaded: ', video.readyState);
        if (video.readyState >= 3) {
            intro.classList.add('intro-animation')
            subtitle.classList.add('subtitle-animation')
            logoNav.classList.add('logo-nav-animation')
        }
    });
}

window.imageClick = (url) => {
    window.location = url;
}

document.addEventListener("DOMContentLoaded", init, false);
