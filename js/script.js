// Animação de entrada ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
    const elementosAnimar = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.1, // Quanto do elemento precisa estar visível (10%)
    });

    elementosAnimar.forEach((el) => observer.observe(el));
});
