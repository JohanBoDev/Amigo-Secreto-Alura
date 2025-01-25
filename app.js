// Solución del challenge amigo secreto

const amigos = [];

const inputNombreAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

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
  // Limpiar el resultado anterior
  if (resultado.textContent) {
    resultado.textContent = '';
  }
}

// Función para sortear amigos
const sortearAmigo = () => {
  if (amigos.length) {
    const indiceAmigoElegido = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos.splice(indiceAmigoElegido, 1);;
    listaAmigos.innerHTML = '';
    actualizarListaAmigos();
    resultado.innerHTML = `El amigo elegido es ${amigoElegido}`;
  } else {
    resultado.innerHTML = 'No hay amigos para sortear';
  }
}