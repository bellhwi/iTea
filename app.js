let slides = document.getElementsByClassName('slides');
let slideIndex = 1;
const filterAll = document.getElementById('filter-all');
const filterDrinks = document.getElementById('filter-drinks');
const filterFood = document.getElementById('filter-food');

init();
addEventListeners();

function init() {
  // Show first slide when page loaded
  showSlides(slideIndex);

  // Auto scroll slideshow
  setInterval(nextSlide, 3000);
}

function addEventListeners() {
  // Next/prev handle
  document.getElementById('prev').addEventListener('click', prevSlide);
  document.getElementById('next').addEventListener('click', nextSlide);

  // Display all menu when load the page
  document.addEventListener('DOMContentLoaded', displayMenu);

  // Set active to show menus
  filterAll.addEventListener('click', setActiveMenu);
  filterDrinks.addEventListener('click', setActiveMenu);
  filterFood.addEventListener('click', setActiveMenu);
}

function setActiveMenu(e) {
  const menus = [...document.querySelectorAll('#menus li a')];
  menus.forEach(menu => {
    menu.className = '';
  })
  e.target.className = 'active';

  // Display Menus
  displayMenu();
}

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

function displayMenu() {
  const gridContainer = document.getElementById('grid-container');

  // Clear grid contents
  gridContainer.innerHTML = '';

  // Filter & display menu
  if (filterAll.classList.contains('active')) {
    // Show Drinks Menu List
    for(let i = 1; i < 3; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/drink-menu-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/drink-menu-${i}.jpeg"></a>
      </div>`
    }

    // Show Food Menu List
    for(let i = 1; i < 3; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/food-menu-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/food-menu-${i}.jpeg"></a>
      </div>`
    }

    // Show Drinks
    for(let i = 1; i < 16; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/drink-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/drink-${i}.jpeg"></a>
      </div>`
    }

    // Show Food
    for(let i = 1; i < 6; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/food-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/food-${i}.jpeg"></a>
      </div>`
    }
  }
  else if (filterDrinks.classList.contains('active')) {
    // Show Drinks Menu List
    for(let i = 1; i < 3; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/drink-menu-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/drink-menu-${i}.jpeg"></a>
      </div>`
    }
    // Show Drinks
    for(let i = 1; i < 16; i++) {
    gridContainer.innerHTML += `
    <div class="menu">
      <a href="img/drink-${i}.jpeg" data-lightbox="menus"
      data-title="Our Menu"><img src="img/drink-${i}.jpeg"></a>
    </div>`
    }
  }
  else if (filterFood.classList.contains('active')) {
    // Show Food Menu List
    for(let i = 1; i < 3; i++) {
      gridContainer.innerHTML += `
      <div class="menu">
        <a href="img/food-menu-${i}.jpeg" data-lightbox="menus"
        data-title="Our Menu"><img src="img/food-menu-${i}.jpeg"></a>
      </div>`
    }
    
    // Show Food
    for(let i = 1; i < 6; i++) {
    gridContainer.innerHTML += `
    <div class="menu">
      <a href="img/food-${i}.jpeg" data-lightbox="menus"
      data-title="Our Menu"><img src="img/food-${i}.jpeg"></a>
    </div>`
    }
  }

}