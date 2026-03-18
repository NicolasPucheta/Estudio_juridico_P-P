/* =============================================
   PUCHETA ASOCIADOS — main.js
   Reemplaza TODOS tus archivos .js por este uno.
   En footer_view.php dejá solo:
   <script src="assets/js/main.js"></script>
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {
    initLayout();
    initHamburger();
    initNavScroll();
    initActiveLink();
    initTyping();
    initScrollReveal();
    initContadores();
    initParallax();
    initCursor();
    initToast();
    initWhatsappForm();
});

/* ── 1. LAYOUT ─────────────────────────────── */
function initLayout() {
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.nav-menu');
    const main   = document.querySelector('main');
    if (!header || !main) return;
    function ajustar() {
       const headerH = header.offsetHeight;

        const navH = window.innerWidth > 968 ? (navbar ? navbar.offsetHeight : 0) : 0;
        main.style.marginTop = (headerH + navH) + 'px';
    }
    ajustar();
    window.addEventListener('resize', ajustar);
}

/* ── 2. HAMBURGER ──────────────────────────── */
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active');
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            const header = document.querySelector('.header');
            const nav    = document.querySelector('.nav-menu');
            const offset = (header ? header.offsetHeight : 0) + (nav ? nav.offsetHeight : 0);
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        });
    });
}

/* ── 3. NAVBAR HIDE ON SCROLL ──────────────── */
function initNavScroll() {
    const nav = document.querySelector('.nav-menu');
    if (!nav) return;
    let lastY = window.scrollY, ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        window.requestAnimationFrame(() => {
            const y = window.scrollY;
            nav.classList.toggle('nav-hidden', y > lastY && y > 120);
            if (y <= lastY) nav.classList.remove('nav-hidden');
            lastY = y; ticking = false;
        });
        ticking = true;
    });
}

/* ── 4. ACTIVE LINK ────────────────────────── */
function initActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-menu a');
    if (!sections.length || !links.length) return;
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const a = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
                if (a) a.classList.add('active');
            }
        });
    }, { threshold: 0.35 }).observe;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(l => l.classList.remove('active'));
            const a = document.querySelector(`.nav-menu a[href="#${entry.target.id}"]`);
            if (a) a.classList.add('active');
        });
    }, { threshold: 0.35 });
    sections.forEach(s => obs.observe(s));
}

/* ── 5. TYPING EFFECT ──────────────────────── */
function initTyping() {
    const el = document.querySelector('.hero-description');
    if (!el) return;
    const texto = el.textContent.trim();
    el.textContent = '';
    el.classList.add('typing-active');
    let i = 0;
    function escribir() {
        if (i < texto.length) { el.textContent += texto.charAt(i++); setTimeout(escribir, 30); }
        else { el.classList.remove('typing-active'); el.classList.add('typing-done'); }
    }
    setTimeout(escribir, 900);
}

/* ── 6. SCROLL REVEAL ──────────────────────── */
function initScrollReveal() {
    const revObs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

    const childObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const siblings = entry.target.parentElement.querySelectorAll('.reveal-child');
            let idx = 0;
            siblings.forEach((s, i) => { if (s === entry.target) idx = i; });
            setTimeout(() => entry.target.classList.add('visible'), idx * 120);
            childObs.unobserve(entry.target);
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-child').forEach(el => childObs.observe(el));

    const cardObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => entry.target.classList.add('visible'), i * 150);
            cardObs.unobserve(entry.target);
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.qs-card').forEach(c => cardObs.observe(c));
}

/* ── 7. CONTADORES ─────────────────────────── */
function initContadores() {
    const counters = document.querySelectorAll('.counter-number');
    if (!counters.length) return;
    function animar(el) {
        const target = parseInt(el.getAttribute('data-target'));
        let step = 0;
        const timer = setInterval(() => {
            step++;
            el.textContent = Math.round((1 - Math.pow(1 - step / 60, 3)) * target).toLocaleString('es-AR');
            if (step >= 60) { el.textContent = target.toLocaleString('es-AR'); clearInterval(timer); }
        }, 2200 / 60);
    }
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.closest('.qs-counter')?.classList.add('visible');
            animar(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 }).observe;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.closest('.qs-counter')?.classList.add('visible');
            animar(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });
    counters.forEach(c => observer.observe(c));
}

/* ── 8. PARALLAX ───────────────────────────── */
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero || window.innerWidth <= 768) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        window.requestAnimationFrame(() => {
            hero.style.backgroundPositionY = `calc(30% + ${window.scrollY * 0.35}px)`;
            ticking = false;
        });
        ticking = true;
    });
}

/* ── 9. CURSOR PERSONALIZADO ───────────────── */
function initCursor() {
    if (window.innerWidth <= 968) return;
    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    const style = document.createElement('style');
    style.textContent = `
        * { cursor: none !important; }
        .cursor-dot {
            position: fixed; width: 6px; height: 6px;
            background: #8b6f47; border-radius: 50%;
            pointer-events: none; z-index: 99999;
            transform: translate(-50%, -50%);
            transition: background 0.2s;
        }
        .cursor-ring {
            position: fixed; width: 32px; height: 32px;
            border: 1px solid rgba(139,111,71,0.5); border-radius: 50%;
            pointer-events: none; z-index: 99998;
            transform: translate(-50%, -50%);
            transition: width .25s ease, height .25s ease, border-color .25s ease;
        }
        .cursor-ring.hover  { width: 50px; height: 50px; border-color: rgba(139,111,71,0.9); }
        .cursor-ring.click  { width: 20px; height: 20px; }
        .nav-menu a.active  { color: #c4a882 !important; }
        .nav-menu a.active::after { width: 60% !important; }
    `;
    document.head.appendChild(style);

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    });
    (function loop() {
        rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button, .servicio-card, .qs-card').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
    document.addEventListener('mousedown', () => ring.classList.add('click'));
    document.addEventListener('mouseup',   () => ring.classList.remove('click'));
    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ── 10. TOAST ─────────────────────────────── */
function initToast() {
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
    let timer = null;
    window.showToast = function (msg, tipo = 'success') {
        clearTimeout(timer);
        toast.textContent = msg;
        toast.className   = 'toast' + (tipo === 'error' ? ' toast-error' : '');
        void toast.offsetWidth;
        toast.classList.add('show');
        timer = setTimeout(() => toast.classList.remove('show'), 3500);
    };
}

/* ── 11. WHATSAPP FORM ─────────────────────── */
function initWhatsappForm() {
    const form = document.getElementById('formConsulta');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre  = document.getElementById('nombre')?.value.trim();
        const mensaje = document.getElementById('mensaje')?.value.trim();
        if (!nombre || !mensaje) {
            window.showToast?.('Por favor completá todos los campos.', 'error');
            return;
        }
        const btn = form.querySelector('button[type="submit"]');
        const txt = btn.textContent;
        btn.textContent = 'Abriendo WhatsApp...';
        btn.disabled = true;
        setTimeout(() => {
            const url = `https://wa.me/5493774639639?text=Consulta desde la web:%0ANombre: ${encodeURIComponent(nombre)}%0AMensaje: ${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
            form.reset();
            btn.textContent = txt;
            btn.disabled = false;
            window.showToast?.('¡Redirigiendo a WhatsApp!');
        }, 600);
    });
}