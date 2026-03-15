document.addEventListener('DOMContentLoaded', function() {
    // Ajustar padding del body según altura de header + navbar
    const header = document.querySelector('.header');
    const navbar = document.querySelector('.nav-menu');
    const body = document.body;
    
    let headerHeight = 0;
    if (header && navbar) {
        headerHeight = header.offsetHeight + navbar.offsetHeight;
        body.style.paddingTop = headerHeight + 'px';
    }
    
    // Menú hamburguesa y scroll suave
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                navMenu.classList.remove('active');
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
});