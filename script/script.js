let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-item'); // Seleciona todos os itens do carrossel

function moveSlide(direction) {
    // Oculta o slide atual
    slides[currentSlide].classList.remove('active');
    
    // Atualiza o índice do slide atual
    currentSlide += direction;

    // Verifica se o índice está fora dos limites
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Volta para o último slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Volta para o primeiro slide
    }

    // Mostra o novo slide
    slides[currentSlide].classList.add('active');
}

// Função para iniciar o carrossel automático
function startAutoSlide() {
    setInterval(() => {
        moveSlide(1); // Muda para o próximo slide
    }, 3000); // Muda a cada 3 segundos (3000 milissegundos)
}

// Inicia o carrossel automático
startAutoSlide();

function abrirmenu() {
    const itens = document.getElementById('nav');
    if (itens.style.display === "block") {
        itens.style.display = "none";
    } else {
        itens.style.display = "block";
    }
}

