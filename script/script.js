document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in'); // Seleciona todos os elementos com a classe fade-in
    const windowHeight = window.innerHeight; // Altura da janela

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top; // Posição do elemento em relação à janela

        // Verifica se o elemento está visível na janela
        if (elementTop < windowHeight && elementTop > 0) {
            element.classList.add('visible'); // Adiciona a classe visible
        } else {
            element.classList.remove('visible'); // Remove a classe visible se não estiver visível
        }
    });
});
function abrirmenu() {
    const itens = document.getElementById('nav');
    if (itens.style.display === "block") {
        itens.style.display = "none";
    } else {
        itens.style.display = "block";
    }
}

