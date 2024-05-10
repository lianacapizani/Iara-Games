const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

const slideInterval = setInterval(autoSlide, 4000); // Altera a cada 5 segundos

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    clearInterval(slideInterval); // Para o intervalo quando um indicador é clicado
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);
