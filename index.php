<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<?php include 'components/head_view.php'; ?>
<?php include 'components/navbar.php'; ?>

<main>

    <!-- ═══════════════════════════════════════
         HERO
    ════════════════════════════════════════ -->
    <section id="hero" class="hero">
        <div class="hero-overlay"></div>

        <div class="hero-content">
            <p class="hero-eyebrow">Curuzú Cuatiá — Corrientes</p>
            <h1>Pucheta<br><em>Asociados</em></h1>
            <div class="hero-divider"></div>
            <p class="hero-description">Defendemos tus intereses con transparencia, confianza y profesionalismo.</p>
            <div class="hero-actions">
                <a href="#servicios" class="btn-primary">Nuestros servicios</a>
                <a href="#consultas" class="btn-secondary">Consultar ahora</a>
            </div>
        </div>

        <div class="hero-scroll">Scroll</div>
    </section>


    <!-- ═══════════════════════════════════════
         QUIÉNES SOMOS
    ════════════════════════════════════════ -->
    <section id="quienes-somos" class="quienes-somos">
        <div class="qs-container">

            <div class="qs-header reveal">
                <span class="qs-label">El equipo</span>
                <h2>Quiénes Somos</h2>
                <p class="qs-intro">Un estudio jurídico fundado sobre la base del compromiso familiar y la excelencia profesional. Más de 20 años defendiendo los derechos de nuestros clientes en la región.</p>
            </div>

            <div class="qs-profesionales">

                <div class="qs-card">
                    <div class="qs-foto-wrapper">
                        <img src="assets/img/FotoDr_MarceloPucheta.jpg" alt="Dr. Marcelo F. Pucheta">
                        <div class="qs-foto-overlay"></div>
                    </div>
                    <div class="qs-info">
                        <h3>Dr. Marcelo F. Pucheta</h3>
                        <span class="qs-cargo">Abogado</span>
                        <p>Especialista en Derecho Administrativo, Laboral y Previsional. Con más de 20 años de trayectoria, destacado por su dedicación y profundo conocimiento del derecho público y privado.</p>
                    </div>
                </div>

                <div class="qs-card">
                    <div class="qs-foto-wrapper">
                        <img src="assets/img/FotoDra_PatriciaPucheta.jpg" alt="Dra. Patricia V. Pucheta">
                        <div class="qs-foto-overlay"></div>
                    </div>
                    <div class="qs-info">
                        <h3>Dra. Patricia V. Pucheta</h3>
                        <span class="qs-cargo">Abogada</span>
                        <p>Especialista en Derecho de Familia, Sucesiones y Derecho de la Salud. Reconocida por su sensibilidad y precisión técnica en causas que involucran el bienestar de las personas y las familias.</p>
                    </div>
                </div>

            </div>

            <div class="qs-contadores">
                <div class="qs-counter">
                    <span class="counter-number" data-target="20">0</span>
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


    <!-- ═══════════════════════════════════════
         SERVICIOS
    ════════════════════════════════════════ -->
    <section id="servicios" class="servicios">
        <div class="container">
            <h2 class="reveal">Servicios</h2>
            <div class="servicios-grid">

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">01</span>
                    <h3>Derecho Laboral</h3>
                    <p>Asistimos a trabajadores en reclamos laborales, despidos, indemnizaciones y conflictos con empleadores. Ofrecemos acompañamiento legal durante todo el proceso para garantizar el pleno respeto de los derechos laborales.</p>
                </article>

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">02</span>
                    <h3>Derecho de Familia y Sucesiones</h3>
                    <p>Brindamos asistencia en divorcios, alimentos, tenencia, adopciones y violencia familiar. También acompañamos en la tramitación de herencias, declaratorias de herederos y partición de bienes.</p>
                </article>

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">03</span>
                    <h3>Derecho Administrativo y Previsional</h3>
                    <p>Representamos a nuestros clientes en conflictos con organismos públicos y gestionamos trámites ante el Estado. También asesoramos en jubilaciones, pensiones y beneficios previsionales.</p>
                </article>

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">04</span>
                    <h3>Contratos y Derecho Societario</h3>
                    <p>Redactamos y revisamos contratos civiles y comerciales: alquileres, compraventas y acuerdos entre partes. También asesoramos en la constitución y gestión de sociedades y reorganizaciones empresariales.</p>
                </article>

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">05</span>
                    <h3>Derecho Ejecutivo</h3>
                    <p>Gestionamos el cobro judicial de deudas instrumentadas en cheques, pagarés, facturas y contratos. Representamos tanto a acreedores como a deudores en la defensa de sus derechos.</p>
                </article>

                <article class="servicio-card reveal-child">
                    <span class="servicio-icon">06</span>
                    <h3>Derecho de la Salud y Penal</h3>
                    <p>Defendemos el acceso a tratamientos y prestaciones médicas frente a obras sociales y prepagas. Ofrecemos defensa técnica en causas penales en todas sus etapas, con rigor y confidencialidad.</p>
                </article>

            </div>
        </div>
    </section>


    <!-- ═══════════════════════════════════════
         CONSULTAS
    ════════════════════════════════════════ -->
    <section id="consultas" class="consultas reveal">
        <div class="consultas-container">
            <h3>Consultas</h3>
            <p class="consultas-subtitulo">Completá el formulario y te respondemos por WhatsApp</p>
            <form id="formConsulta" class="form-consulta">
                <input type="text" id="nombre" placeholder="Nombre completo" required>
                <textarea id="mensaje" placeholder="¿En qué podemos ayudarte?" rows="5" required></textarea>
                <button type="submit" class="btn-submit">Enviar consulta</button>
            </form>
        </div>
    </section>

</main>

<?php include 'components/footer_view.php'; ?>