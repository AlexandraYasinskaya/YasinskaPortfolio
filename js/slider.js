document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const sliderImages = document.querySelectorAll(".slider__image");
    const prevButton = document.querySelector(".slider__control--prev");
    const nextButton = document.querySelector(".slider__control--next");

    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = sliderImages.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
});
