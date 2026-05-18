const btnDescargar = document.getElementById("btnDescargar");

btnDescargar.addEventListener("click", () => {
  alert("Acá luego vamos a conectar la descarga real de Dinamik Leads.");
});

/* Soporte */
const supportBtn = document.querySelector(".support-btn");

supportBtn.addEventListener("click", () => {
  alert("Acá luego podemos conectar WhatsApp, email o formulario de soporte.");
});

/* Animación simple al cargar */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});