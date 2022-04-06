function showSlides(move){
    const slider = document.querySelector(".slider");
    if (move > slider.length) {slideIndex = 1}
    if (move < 1) {slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[slideIndex-1].style.display = "block";
}

const slideIndex = 1;
showSlides(slideIndex);

function plusSlides(move) {
    showSlides(slideIndex += n);
}