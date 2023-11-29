document.getElementById("currentSlide").addEventListener("input", (event) => {
  let currentSlide = document.getElementById("currentSlide");
  let max = currentSlide.getAttribute("slidesCount");
  let min = 1;
  if(min <= currentSlide.value && currentSlide.value <= max) {
    nextSlideNum = currentSlide.value;
  } else if (currentSlide.value < min) {
    nextSlideNum = max;
  } else if (currentSlide.value > max) {
    nextSlideNum = min;
  }
  activeSlide(nextSlideNum);
});

function activeSlide(slideNum) {
  let currentSlide = document.getElementById("currentSlide");
  currentSlide.value = slideNum;
  let activeSlide = document.getElementsByClassName('slide active')[0];
  activeSlide.classList.remove('active');
  document.getElementById('slide-' + slideNum).classList.add('active');
}
