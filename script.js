const boton = document.querySelector("#botonSaludo");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function() {
    mensaje.textContent = "¡Hola! Soy Lorena y estoy aprendiendo JavaScript. 🚀";
});