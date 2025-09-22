// app.js
console.log("archivo cargado");

// Pool REAL del sorteo (aquí se eliminan ganadores)
const pool = [];

// Referencias del DOM
const input = document.getElementById("amigo");
const ulLista = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Exponer funciones para los onclick del HTML
window.agregarAmigo = function () {
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // 1) Se agrega al pool del sorteo
  pool.push(nombre);

  // 2) Se agrega a la lista visible (APPEND, sin limpiar la lista)
  const li = document.createElement("li");
  li.textContent = nombre;
  ulLista.appendChild(li);

  // Limpiar input
  input.value = "";
  input.focus();

  console.log("Pool (para sorteo):", pool);
};

window.sortearAmigo = function () {
  if (pool.length === 0) {
    alert("Ya no quedan amigos por sortear.");
    return;
  }

  // Elegir índice al azar del POOL
  const idx = Math.floor(Math.random() * pool.length);
  const ganador = pool[idx];

  // Mostrar/el historial de ganadores (append o reemplazar)
  // Si prefieres reemplazar siempre, usa: ulResultado.innerHTML = "";
  const li = document.createElement("li");
  li.innerHTML = `🎉 El amigo secreto es: <strong>${ganador}</strong>`;
  // Reemplaza el resultado anterior:
  ulResultado.innerHTML = "";
  ulResultado.appendChild(li);

  // Quitar del POOL para que no se repita
  pool.splice(idx, 1);

  console.log("Pool tras sorteo:", pool);
};
