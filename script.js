const startScreen = document.getElementById('startScreen');
const musica = document.getElementById('miMusica');
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = slides.length;

// 1. Iniciar experiencia (Quitar pantalla y poner música)
startScreen.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    musica.play().catch(error => console.log("El navegador bloqueó el audio: ", error));
});

// 2. Control de botones
nextBtn.addEventListener('click', () => {
    counter = (counter + 1) % size; // Ciclo infinito simplificado
    actualizarSlider();
});

prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + size) % size; // Ciclo infinito hacia atrás
    actualizarSlider();
});

function actualizarSlider() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
}
