

// Usuario "de prueba" quemado en el código, solo para validar el flujo
const USUARIO_PRUEBA = {
    correo: "admin@gema.com",
    password: "Gema2026*"
};

// Esperamos a que el HTML esté cargado antes de buscar el formulario
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const mensajeError = document.getElementById("mensajeError");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // evita que la página se recargue

        // Capturamos lo que el usuario escribió
        const correoIngresado = document.getElementById("usuario").value.trim();
        const passwordIngresado = document.getElementById("password").value;

        // Comparamos contra el usuario ficticio
        if (correoIngresado === USUARIO_PRUEBA.correo && passwordIngresado === USUARIO_PRUEBA.password) {

            // Credenciales correctas → guardamos que "hay sesión" y redirigimos
            sessionStorage.setItem("usuarioLogueado", correoIngresado);
            window.location.href = "dashboard.html";

        } else {
            // Credenciales incorrectas → mostramos mensaje sin recargar la página
            mensajeError.textContent = "Usuario o contraseña incorrectos.";
            mensajeError.style.display = "block";
        }
    });

});