document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider .slide");
    const nextButton = document.querySelector(".slider-container .next");
    const prevButton = document.querySelector(".slider-container .prev");

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Initialize slider
    showSlide(currentSlide);
});
