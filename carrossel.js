let index = 0;

function moverSlide(n) {
    const slides = document.querySelectorAll(".carrossel img");
    const totalSlides = slides.length;
    index += n;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const carrossel = document.querySelector(".carrossel");
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}
