// Solución del challenge amigo secreto

const amigos = [];

const inputNombreAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar amigos
const agregarAmigo = () => {
  let nombreAmigo = inputNombreAmigo.value;
  if (nombreAmigo) {
    if (amigos.includes(nombreAmigo)) {
      inputNombreAmigo.value = '';
      alert(`Ya existe un amigo llamado ${nombreAmigo}`);
      return;
    }
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
    startConfetti();
    const indiceAmigoElegido = Math.floor(Math.random() * amigos.length);
    const amigoElegido = amigos.splice(indiceAmigoElegido, 1);;
    listaAmigos.innerHTML = '';
    actualizarListaAmigos();
    resultado.innerHTML = `El amigo elegido es ${amigoElegido}`;
  } else {
    resultado.innerHTML = 'No hay amigos para sortear';
  }
}

function startConfetti() {
  // Crear confeti usando la librería canvas-confetti
  confetti({
    particleCount: 500,  // Número de partículas de confeti
    spread: 75,          // Ángulo de dispersión
    origin: { y: .8 },  // Origen del confeti (en este caso, un poco hacia abajo desde el borde superior)
    colors: ['#b2aa8e', '#0c1b33', '#7a306c', '#03b5aa', '#dbfe87'], // Colores del confeti
  });
}