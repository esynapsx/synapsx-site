import './index.css';


var video = document.getElementById("video-intro");
var intro = document.getElementById("intro");
var subtitle = document.getElementById("subtitle");
var logoNav = document.getElementById("logo-nav");

window.imageClick = (url) => {
    window.location = url;
}

video.addEventListener('loadeddata', (e) => {
    //Video should now be loaded but we can add a second check
    setTimeout(()=> {
        if (video.readyState >= 3) {
            intro.classList.add('intro-animation')
            subtitle.classList.add('subtitle-animation')
            logoNav.classList.add('logo-nav-animation')
        }
    }, 500)
});

