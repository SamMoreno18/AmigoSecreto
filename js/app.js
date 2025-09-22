console.log('archivo cargado');

// Array para almacenar los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    console.log(nombre);
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        let amigos = amigos[amigos,length -1];
        console.log('registro eliminado');
        console.log(amigos);
        return;
    }

    amigos.push(nombre);
    input.value = '';
    console.log(amigos);



};

// Función para mostrar la lista de nombres


