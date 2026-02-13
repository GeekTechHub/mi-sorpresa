const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const startScreen = document.getElementById("startScreen");
const music = document.getElementById("bgMusic");

let currentIndex = 0;
let startX = 0;
let isDragging = false;

startScreen.addEventListener("click", () => {
  startScreen.style.display = "none";
  music.play().catch(() => {});
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50 && currentIndex < slides.length - 1) {
    currentIndex++;
  } else if (diff < -50 && currentIndex > 0) {
    currentIndex--;
  }

  updateSlider();
  isDragging = false;
});
