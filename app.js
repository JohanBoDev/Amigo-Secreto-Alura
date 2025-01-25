// Solución del challenge amigo secreto

const amigos = [];

const inputNombreAmigo = document.getElementById('amigo');

// Función para agregar amigos
const agregarAmigo = () => {
  if (inputNombreAmigo.value) {
    amigos.push(inputNombreAmigo.value);
    inputNombreAmigo.value = '';
    return;
  }
  alert('Por favor, inserte un nombre');
}
