// Toggle Menu Visibility
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const openIcon = document.getElementById("menu-open-icon");
const closeIcon = document.getElementById("menu-close-icon");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    menu.classList.remove("hidden");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy");
  lazyImages.forEach((img) => {
    const imgSrc = img.getAttribute("data-src");
    img.setAttribute("src", imgSrc);
  });
});

// Countdown Timer
function startCountdown(eventDate) {
  const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown-timer").innerHTML =
        "Event has started!";
    }
  }, 1000);
}
startCountdown(new Date("Nov 11, 2024 19:45:00").getTime());

// Slideshow Background Image
const slideshowImages = [
  "./images/bg000.jpg",
  "./images/bg001.jpg",
  "./images/bg002.jpg",
  "./images/bg003.jpg",
];
let currentSlideshowIndex = 0;

function changeBackgroundImage() {
  const container = document.querySelector(".slideshow-container");
  container.style.backgroundImage = `url(${slideshowImages[currentSlideshowIndex]})`;
  updateCycleButtons();
  currentSlideshowIndex = (currentSlideshowIndex + 1) % slideshowImages.length;
}

function createCycleButtons() {
  const cycleButtonsContainer = document.querySelector(".cycle-buttons");
  cycleButtonsContainer.innerHTML = "";
  slideshowImages.forEach(() => {
    const button = document.createElement("button");
    button.className = "cycle-button w-3 h-3 rounded-full bg-white opacity-50";
    cycleButtonsContainer.appendChild(button);
  });
}

function updateCycleButtons() {
  const buttons = document.querySelectorAll(".cycle-button");
  buttons.forEach((button, index) => {
    button.style.opacity = index === currentSlideshowIndex ? "1" : "0.5";
  });
}

// Start the slideshow automatically when the page loads
document.addEventListener("DOMContentLoaded", function () {
  createCycleButtons();
  changeBackgroundImage(); // Initialize the first image
  setInterval(changeBackgroundImage, 2000); // Change image every 2 seconds
});

// Toggle Dropdown
function toggleDropdown(menuId) {
  const dropdown = document.getElementById(menuId);
  dropdown.classList.toggle("hidden");
}
