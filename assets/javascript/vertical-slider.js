function activeVerticalSlide(dot) {
  let slide = dot.getAttribute('slide-id');
  let slides = document.getElementsByClassName('slide-vertical');
  let dots = document.querySelectorAll('.vertical-slider-container .slidedots');

  for (let index = 0; index < dots.length; index++) {
    const dot = dots[index];
    dot.classList.remove('active');
  }

  dot.classList.add('active');

  for (let index = 0; index < slides.length; index++) {
    let slide = slides[index];
    slide.classList.remove('active-slide-vertical');
  }
  document.getElementById(slide).classList.add('active-slide-vertical');
}