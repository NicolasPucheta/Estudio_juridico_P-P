
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<?php include 'components/head_view.php'; ?>
<?php include 'components/navbar.php'; ?>

<main>
    <!-- Hero Section -->
    <section id="hero" class="hero">

        <div class="hero-content">
            <p class="hero-subtitle">Compromiso y soluciones Legales</p>
            <h1>Estudio Jurídico</h1>
            <p class="hero-description">Defendemos tus intereses con transparencia, confianza y profesionalismo.</p>
            <a href="#servicios" class="btn-primary">Nuestros servicios</a>
        </div>

        <div class="mi-carousel">
            <div class="mi-carousel-inner">
                <div class="mi-carousel-item active">
                    <img src="assets/img/principal.jpg" alt="Justicia">
                </div>
                <div class="mi-carousel-item">
                    <img src="assets/img/principal2.jpg" alt="Derecho">
                </div>
                <div class="mi-carousel-item">
                    <img src="assets/img/image.webp" alt="Legal">
                </div>
            </div>
            
            <!-- Controles -->
            <button class="mi-carousel-prev" aria-label="Anterior">‹</button>
            <button class="mi-carousel-next" aria-label="Siguiente">›</button>
            
            <!-- Indicadores -->
            <div class="mi-carousel-indicators">
                <span class="mi-indicator active" data-slide="0"></span>
                <span class="mi-indicator" data-slide="1"></span>
                <span class="mi-indicator" data-slide="2"></span>
            </div>
        </div>
        

    </section>


<section id="quienes-somos" class="quienes-somos">
    <div class="qs-container">

        <div class="qs-header reveal">
            <span class="qs-label">El equipo</span>
            <h2>Quiénes Somos</h2>
            <p class="qs-intro">Un estudio jurídico fundado sobre la base del compromiso familiar y la excelencia profesional. Más de 15 años defendiendo los derechos de nuestros clientes en la región.</p>
        </div>

        <!-- Profesionales -->
        <div class="qs-profesionales">

            <div class="qs-card">
                <div class="qs-foto-wrapper">
                    <img src="assets/img/foto1.jpg" alt="Dr. Marcelo F. Pucheta">
                    <div class="qs-foto-overlay"></div>
                </div>
                <div class="qs-info">
                    <h3>Dr. Marcelo F. Pucheta</h3>
                    <span class="qs-cargo">Abogado — Socio Fundador</span>
                    <p>Especialista en Derecho Administrativo, Laboral y Previsional. Con más de 15 años de trayectoria, lidera el estudio con dedicación y profundo conocimiento del derecho público y privado.</p>
                </div>
            </div>

            <div class="qs-card">
                <div class="qs-foto-wrapper">
                    <img src="assets/img/foto2.jpg" alt="Dra. Patricia V. Pucheta">
                    <div class="qs-foto-overlay"></div>
                </div>
                <div class="qs-info">
                    <h3>Dra. Patricia V. Pucheta</h3>
                    <span class="qs-cargo">Abogada — Socia</span>
                    <p>Especialista en Derecho de Familia, Sucesiones y Derecho de la Salud. Reconocida por su sensibilidad y precisión técnica en causas que involucran el bienestar de las personas y las familias.</p>
                </div>
            </div>

        </div>

        <!-- Contadores -->
        <div class="qs-contadores">
            <div class="qs-counter">
                <span class="counter-number" data-target="15">0</span>
                <span class="counter-plus">+</span>
                <p>Años de experiencia</p>
            </div>
            <div class="qs-counter">
                <span class="counter-number" data-target="850">0</span>
                <span class="counter-plus">+</span>
                <p>Casos resueltos</p>
            </div>
            <div class="qs-counter">
                <span class="counter-number" data-target="600">0</span>
                <span class="counter-plus">+</span>
                <p>Clientes atendidos</p>
            </div>
            <div class="qs-counter">
                <span class="counter-number" data-target="10">0</span>
                <span class="counter-plus">+</span>
                <p>Áreas del derecho</p>
            </div>
        </div>

    </div>
</section>

 <!-- Servicios Section -->
<section id="servicios" class="servicios">
    <div class="container">
        <h2 class="reveal"> Servicios</h2>
        <div class="servicios-grid">

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">01</div>
                <h3>Derecho Laboral</h3>
                <p>Asistimos a trabajadores en reclamos laborales, despidos, indemnizaciones y conflictos con empleadores. Ofrecemos acompañamiento legal durante todo el proceso para garantizar el pleno respeto de los derechos laborales.</p>
            </article>

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">02</div>
                <h3>Derecho de Familia y Sucesiones</h3>
                <p>Brindamos asistencia en divorcios, alimentos, tenencia, adopciones y violencia familiar. También acompañamos en la tramitación de herencias, declaratorias de herederos y partición de bienes, priorizando el bienestar de cada familia.</p>
            </article>

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">03</div>
                <h3>Derecho Administrativo y Previsional</h3>
                <p>Representamos a nuestros clientes en conflictos con organismos públicos y gestionamos trámites ante el Estado. También asesoramos en jubilaciones, pensiones y beneficios previsionales, acompañando cada etapa del proceso.</p>
            </article>

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">04</div>
                <h3>Contratos y Derecho Societario</h3>
                <p>Redactamos y revisamos contratos civiles y comerciales: alquileres, compraventas y acuerdos entre partes. También asesoramos en la constitución y gestión de sociedades, estatutos y reorganizaciones empresariales.</p>
            </article>

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">05</div>
                <h3>Derecho Ejecutivo</h3>
                <p>Gestionamos el cobro judicial de deudas instrumentadas en cheques, pagarés, facturas y contratos. Representamos tanto a acreedores en la ejecución de sus créditos como a deudores en la defensa de sus derechos.</p>
            </article>

            <article class="servicio-card reveal-child">
                <div class="servicio-icon">06</div>
                <h3>Derecho de la Salud y Penal</h3>
                <p>Defendemos el acceso a tratamientos y prestaciones médicas frente a obras sociales y prepagas. Además, ofrecemos defensa técnica en causas penales en todas sus etapas, actuando con rigor y absoluta confidencialidad.</p>
            </article>

        </div>
    </div>
</section>

    <!-- consultas Section -->
  <section id="consultas" class="consultas reveal">
    <div class="consultas-container">
        <h3>Consultas</h3>
         <p class="consultas-subtitulo">Completá el formulario y te respondemos por WhatsApp</p>
        <form id="formConsulta" class="form-consulta">
            <input type="text" id="nombre" placeholder="Nombre" required>
            <textarea id="mensaje" placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit" class="btn-submit">Enviar</button>
        </form>
    </div>
</section>
</main>
<?php include 'components/footer_view.php'; ?>