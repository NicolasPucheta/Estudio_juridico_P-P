document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.mi-carousel-item');
    const indicators = document.querySelectorAll('.mi-indicator');
    const prevBtn = document.querySelector('.mi-carousel-prev');
    const nextBtn = document.querySelector('.mi-carousel-next');
    let currentSlide = 0;
    let autoplayInterval;

    function showSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        items[index].classList.add('active');
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + items.length) % items.length;
        showSlide(currentSlide);
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Controles
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay();
    });

    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoplay();
            startAutoplay();
        });
    });

    // Autoplay
    startAutoplay();

    // Pausar autoplay al hacer hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
});