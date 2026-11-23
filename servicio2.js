// Cotizador de costo de envío
const TARIFA_POR_KM = 0.5;
const COSTO_EXPRESS = 2;

document.getElementById("formDelivery").addEventListener("submit", (e) => {
  e.preventDefault();

  const base = Number(document.getElementById("tipo").value);
  const distancia = Number(document.getElementById("distancia").value);
  const express = document.getElementById("express").checked;

  let total = base + distancia * TARIFA_POR_KM;
  if (express) total += COSTO_EXPRESS;

  const minutos = express ? 15 + distancia * 2 : 25 + distancia * 3;

  document.getElementById("resultado").textContent =
    `Costo: $${total.toFixed(2)} · Llega en aprox. ${minutos} min`;
});
