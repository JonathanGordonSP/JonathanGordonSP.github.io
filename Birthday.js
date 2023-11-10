const video = document.getElementById('custom-video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', toggleVideo);

function toggleVideo() {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    } else {
        video.pause();
        playButton.style.display = 'block';
    }
}

const toggleBtn = document.getElementById('toggleBtn');
const navbarLinks = document.getElementById('navbarLinks');
const navbar = document.getElementById('navbar');
let prevScrollPos = window.pageYOffset;

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = `-${navbar.clientHeight}px`;
        navbarLinks.classList.remove('show');
    }

    prevScrollPos = currentScrollPos;
});
