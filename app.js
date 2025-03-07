// Solución del challenge amigo secreto

const amigos = [];
const amigosElegibles = [];

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
    amigosElegibles.push({ nombre: inputNombreAmigo.value, elegido: false });
    inputNombreAmigo.value = '';
    actualizarListaAmigos();
    return;
  }
  alert('Por favor, inserte un nombre');
}

// Función para actualizar la lista de amigos
const actualizarListaAmigos = () => {
  listaAmigos.innerHTML = '';
  amigosElegibles.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo.nombre;
    listaAmigos.appendChild(li);
  });
  // Limpiar el resultado anterior
  if (resultado.textContent) {
    resultado.textContent = '';
  }
}

// Función para sortear amigos
const sortearAmigo = () => {
  if (amigosElegibles.some(amigo => amigo.elegido === false)) {
    startConfetti();
    const indiceAmigo = Math.floor(Math.random() * amigos.length);
    const [amigoElegido] = amigos.splice(indiceAmigo, 1);
    const indiceAmigoElegido = amigosElegibles.findIndex(amigo => amigo.nombre === amigoElegido);
    amigosElegibles[indiceAmigoElegido].elegido = true;
    mostrarResultado(`El amigo elegido es ${amigoElegido}`);
  } else {
    mostrarResultado(
      !amigosElegibles.length
        ? 'No hay amigos para sortear'
        : 'Todos los amigos ya han sido elegidos'
    );
  }
}

// Función para reiniciar el sorteo
const reiniciarSorteo = () => {
  if (!amigosElegibles.length || amigosElegibles.every(amigo => !amigo.elegido)) {
    return;
  }

  amigos.splice();
  amigosElegibles.forEach(amigo => {
    amigos.push(amigo.nombre);
    amigo.elegido = false;
  });

  mostrarResultado('De nuevo todos los amigos son elegibles en el sorteo');
}

// Función para mostrar el resultado del sorteo
const mostrarResultado = (mensaje) => {
  resultado.innerHTML = mensaje;
  setTimeout(() => {
    resultado.innerHTML = '';
  }, 3000);
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