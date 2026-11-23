// Menú desplegable en pantallas pequeñas
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Año actual en el pie de página
document.getElementById("year").textContent = new Date().getFullYear();
