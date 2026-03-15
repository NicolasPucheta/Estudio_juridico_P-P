/* =============================================
   ARCHIVO: assets/js/reveal_toast.js
   Agregá al final de footer_view.php:
   <script src="assets/js/reveal_toast.js"></script>
   ============================================= */


/* ── 1. SCROLL REVEAL GENERAL ──────────────── */
(function () {

    // Elementos que se revelan solos
    const revealEls = document.querySelectorAll('.reveal');

    // Elementos con delay escalonado (hijos de grids)
    const revealChildren = document.querySelectorAll('.reveal-child');

    const observerOpts = { threshold: 0.12 };

    // Observer para elementos individuales
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOpts);

    revealEls.forEach(el => revealObserver.observe(el));

    // Observer para hijos con delay escalonado
    const childObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Busca el índice entre sus hermanos para el delay
                const siblings = entry.target.parentElement.querySelectorAll('.reveal-child');
                let index = 0;
                siblings.forEach((s, i) => { if (s === entry.target) index = i; });

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 120);

                childObserver.unobserve(entry.target);
            }
        });
    }, observerOpts);

    revealChildren.forEach(el => childObserver.observe(el));

})();


/* ── 2. TOAST ───────────────────────────────── */
(function () {

    // Crear el elemento toast una sola vez
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);

    let toastTimer = null;

    // Función global para mostrar el toast
    window.showToast = function (mensaje, tipo = 'success') {
        clearTimeout(toastTimer);

        toast.textContent = mensaje;
        toast.className = 'toast' + (tipo === 'error' ? ' toast-error' : '');

        // Forzar reflow para que la transición funcione
        void toast.offsetWidth;

        toast.classList.add('show');

        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    };

    // Interceptar el formulario de consultas
    const form = document.getElementById('formConsulta');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre')?.value.trim();
        const mensaje = document.getElementById('mensaje')?.value.trim();

        if (!nombre || !mensaje) {
            showToast('Por favor completá todos los campos.', 'error');
            return;
        }

        // Acá va tu lógica real de envío (fetch, AJAX, etc.)
        // Por ahora simula el envío:
        const btn = form.querySelector('button[type="submit"]');
        const textoOriginal = btn.textContent;
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            form.reset();
            btn.textContent = textoOriginal;
            btn.disabled = false;
            showToast('¡Consulta enviada! Nos comunicaremos pronto.');
        }, 1000);
    });

})();
