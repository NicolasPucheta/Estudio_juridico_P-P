document.getElementById("formConsulta").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    let texto = `Consulta desde la web:%0A
                    Nombre: ${nombre}%0A
                    Mensaje: ${mensaje}`;

    let numero = "5493774639639";

    let url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, "_blank");
});