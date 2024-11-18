const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const audioControl = document.querySelector('.audio-control');
const audio = document.querySelector('#nature-sound');

let currentSlide = 0;
let isPlaying = false;

function updateSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

// Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

audioControl.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        audioControl.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    } else {
        audio.play();
        audioControl.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
    }
    isPlaying = !isPlaying;
});

// Auto-advance slides every 9 seconds
setInterval(nextSlide, 9000);