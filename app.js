// Solución del challenge amigo secreto

const amigos = [];

const inputNombreAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

// Función para agregar amigos
const agregarAmigo = () => {
  if (inputNombreAmigo.value) {
    amigos.push(inputNombreAmigo.value);
    inputNombreAmigo.value = '';
    actualizarListaAmigos();
    return;
  }
  alert('Por favor, inserte un nombre');
}

// Función para actualizar la lista de amigos
const actualizarListaAmigos = () => {
  listaAmigos.innerHTML = '';
  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}
