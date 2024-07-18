import './index.scss';


var video = document.getElementById("video-intro");
var intro = document.getElementById("intro");
var subtitle = document.getElementById("subtitle");
var logoNav = document.getElementById("logo-nav");
var footer = document.getElementById("footer");

window.imageClick = (url) => {
    window.location = url;
}

setTimeout(() => {
        intro.classList.add('intro-animation')
        subtitle.classList.add('subtitle-animation')
        logoNav.classList.add('logo-nav-animation')
        footer.classList.add('footer-animation')
}, 1000);

/*video.addEventListener('loadeddata', (e) => {
    //Video should now be loaded but we can add a second check
        if (video.readyState >= 3) {
            intro.classList.add('intro-animation')
            subtitle.classList.add('subtitle-animation')
            logoNav.classList.add('logo-nav-animation')
        }
});*/

