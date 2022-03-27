let slides = document.getElementsByClassName('slides');
let slideIndex = 1;

showSlides(slideIndex);

// Auto scroll slideshow
// setInterval(prevSlide, 3000);

// Next/prev handle
document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

// Current image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  // Next/prev button controls from the start & end
  if (n > slides.length) { slideIndex = 1 }
  else if (n < 1) { slideIndex = slides.length }

  // Reset all slides visibility
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  // Display current slide
  slides[slideIndex - 1].style.display = 'block';
}

