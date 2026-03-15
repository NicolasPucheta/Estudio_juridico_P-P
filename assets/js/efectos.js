/* ── 1. NAVBAR HIDE ON SCROLL ──────────────── */
(function () {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolleando hacia abajo → ocultar
                    nav.classList.add('nav-hidden');
                } else {
                    // Scrolleando hacia arriba → mostrar
                    nav.classList.remove('nav-hidden');
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });
})();


/* ── 2. TYPING EFFECT EN HERO ──────────────── */
(function () {
    const el = document.querySelector('.hero-description');
    if (!el) return;

    const textoFinal = 'Defendemos tus intereses con transparencia, confianza y profesionalismo.';
    const velocidad = 35; // ms por letra — bajá para más rápido

    el.textContent = '';

    let i = 0;
    function escribir() {
        if (i < textoFinal.length) {
            el.textContent += textoFinal.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        } else {
            el.classList.add('typing-done'); // saca el cursor al terminar
        }
    }

    // Esperar 800ms antes de arrancar para que la página cargue
    setTimeout(escribir, 800);
})();


/* ── 3. CONTADOR ANIMADO ───────────────────── */
(function () {
    const counters = document.querySelectorAll('.counter-number');
    if (!counters.length) return;

    function animarContador(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duracion = 2000; // ms total de la animación
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            // Easing: empieza rápido y desacelera al final
            const progreso = step / steps;
            const eased = 1 - Math.pow(1 - progreso, 3);
            current = Math.round(eased * target);

            el.textContent = current.toLocaleString('es-AR');

            if (step >= steps) {
                el.textContent = target.toLocaleString('es-AR');
                clearInterval(timer);
            }
        }, duracion / steps);
    }

    // Usar IntersectionObserver para disparar cuando los contadores son visibles
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const parent = counter.closest('.qs-counter');
                if (parent) parent.classList.add('visible');
                animarContador(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
})();


/* ── 4. SCROLL REVEAL PARA CARDS ───────────── */
(function () {
    const cards = document.querySelectorAll('.qs-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay escalonado entre cards
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
})();

