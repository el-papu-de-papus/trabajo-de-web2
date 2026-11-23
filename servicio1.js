// Contadores animados de impacto
document.querySelectorAll(".contador").forEach((contador) => {
  const meta = Number(contador.dataset.meta);
  const incremento = Math.ceil(meta / 60);
  let actual = 0;

  const intervalo = setInterval(() => {
    actual += incremento;
    if (actual >= meta) {
      actual = meta;
      clearInterval(intervalo);
    }
    contador.textContent = actual;
  }, 25);
});

// Formulario de reporte de rescate
document.getElementById("formKoala").addEventListener("submit", (e) => {
  e.preventDefault();
  const ubicacion = document.getElementById("ubicacion").value;
  document.getElementById("mensajeKoala").textContent =
    `¡Gracias! Un equipo de rescate va en camino a: ${ubicacion}`;
  e.target.reset();
});
