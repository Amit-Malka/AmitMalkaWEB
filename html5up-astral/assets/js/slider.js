document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    const updateSliderPosition = () => {
        const width = slides[0].clientWidth;
        slider.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    window.addEventListener("resize", updateSliderPosition);
});
