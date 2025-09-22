console.log('archivo cargado');

// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // quita espacios sobrantes
    console.log('Intento de agregar:', nombre);

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // salir sin modificar nada
    }

    amigos.push(nombre);
    input.value = ''; // limpiar el campo
    console.log('Lista actual:', amigos);

    actualizarLista();
}

// Función para mostrar la lista en el <ul>
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // limpiar lista previa

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo y eliminarlo de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega al menos un nombre.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Eliminar el amigo sorteado del array
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista en pantalla
    actualizarLista();

    console.log('Lista después de sorteo:', amigos);
}
