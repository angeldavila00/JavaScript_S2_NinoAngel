
let juegoActivo = false;
let mostrandoCartas = false;
let dificultadActual = 'facil';

let cartasDelJuego = [];
let secuenciaCorrecta = [];
let secuenciaJugador = [];


const niveles = {
    facil: {
        numeroCartas: 4,
        tiempoMostrar: 2000,
        nombreG: 'facil',
        descripcion: '4 cartas, 2 segundos cada una',
    },

    medio: {
        numeroCartas: 6,
        tiempoMostrar: 1500,
        nombreG: 'medio',
        descripcion: '6 cartas, 1.5 segundos cada una',
    },
    dificil: {
        numeroCartas: 8,
        tiempoMostrar: 1000,
        nombreG: 'dificil',
        descripcion: '8 cartas, 1 segundos cada una',
    }
};

// Funciones
window.onload = function () {
    actualizarInfoNivel();
    configurarEventos();
};


function configurarEventos() {
    const botonesDificultad = document.querySelectorAll('.dificultad_btn');
    botonesDificultad[0].onclick = () => cambiarDificultad('facil');
    botonesDificultad[1].onclick = () => cambiarDificultad('medio');
    botonesDificultad[2].onclick = () => cambiarDificultad('dificil');

    const botonJuego = document.querySelector('.btn_game');
    botonJuego.onclick = empezarJuego;
    botonJuego.id = 'botonJuego';
}

//Niveles

function cambiarDificultad(nuevoNivel) {
    if (juegoActivo || mostrandoCartas) return;

    dificultadActual = nuevoNivel;

    document.querySelectorAll('.dificultad_btn').forEach(btn => {
        btn.classList.remove('seleccion')
    });

    const botones = document.querySelectorAll('.dificultad_btn');
    if (nuevoNivel === 'facil') botones[0].classList.add('seleccion');
    else if (nuevoNivel === 'medio') botones[1].classList.add('seleccion');
    else if (nuevoNivel === 'dificil') botones[2].classList.add('seleccion');

    actualizarInfoNivel();
    actualizarG();
    limpiarCartas();
}

//Actualizar info

function actualizarInfoNivel() {
    const nivel = niveles[dificultadActual];
    const elemento = document.getElementById('infoNivel');
    elemento.innerHTML = `<strong>Nivel ${(dificultadActual)}: </strong> ${nivel.descripcion}`
}

//css
function actualizarG() {
    const zonaCartas = document.getElementById('zonaCartas');
    const nivel = niveles[dificultadActual];
    zonaCartas.className = `cartas_zona ${nivel.nombreG}`;

}


function empezarJuego() {
    const boton = document.getElementById('botonJuego');
    boton.disabled = true;
    boton.textContent = 'Cargando...';
    boton.style.opacity = '0.7';
    boton.style.cursor = 'not-allowed';

    cambiarMensaje('preparando el juego...');

    crearNuevaBaraja();
}

//Api
function crearNuevaBaraja() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    xhr.onload = function () {
        if (xhr.status === 200) {
            const respuesta = JSON.parse(xhr.responseText);
            sacarCartas(respuesta.deck_id);
            console.log(respuesta)

        } else {
            mensajeError('No se puede crear la baraja...')
        }
    };
    xhr.onerror = function () {
        mensajeError('Error de conexion...');
    }
    xhr.send();
}

function sacarCartas(idBaraja) {
    const nivel = niveles[dificultadActual];
    const url = `https://deckofcardsapi.com/api/deck/${idBaraja}/draw/?count=${nivel.numeroCartas}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const respuesta = JSON.parse(xhr.responseText);
            cartasDelJuego = respuesta.cards;

            mostrarSecuenciaCartas();

        }
        else {
            manejarError('No se pudieron sacar las cartas');
        }
    };
    xhr.onerror = function () {
        manejarError('Error de conexión');
    };
    xhr.send();
}

function manejarError(mensaje) {
    console.error('Error: ', mensaje);
    cambiarMensaje('Error al cargar el juego.');
    const boton = document.getElementById('botonJuego');
    boton.disabled = false;
    boton.textContent = 'Iniciar Juego';
    boton.style.opacity = '1';
    boton.style.cursor = 'pointer'
}

//Juego

function mostrarSecuenciaCartas() {
    const nivel = niveles[dificultadActual];
    mostrandoCartas = true;

    cambiarMensaje('Observa y memoriza el orden');

    prepararZonaCartas();
    const posicionesAleatorias = crearOrdenAleatorio(nivel.numeroCartas);

    secuenciaCorrecta = []
    const mapaCartaPosicion = {};

    for (let i = 0; i < posicionesAleatorias.length; i++) {
        const posicion = posicionesAleatorias[i];
        const carta = cartasDelJuego[i];
        mapaCartaPosicion[posicion] = carta;
        secuenciaCorrecta.push(posicion);
    }

    mostrarCartasUnaPorUna(posicionesAleatorias, mapaCartaPosicion, 0);

}

function prepararZonaCartas () {
    const zonaCartas = document.getElementById('zonaCartas');
    const nivel = niveles[dificultadActual];

    zonaCartas.innerHTML = '';
    zonaCartas.className = `cartas_zona ${nivel.nombreG}`;

    for (let i = 0;i < nivel.numeroCartas; i++){
        const elementoCarta = document.createElement('div');
        elementoCarta.className = 'carta';
        elementoCarta.innerHTML = `<div class="cartaOculta">?</div>`;
        elementoCarta.setAttribute('dataPosicion', i);
        zonaCartas.appendChild(elementoCarta);
        }
}

function mostrarCartasUnaPorUna(posiciones, mapa, indice) {
    const nivel = niveles[dificultadActual];

    if ( indice >= posiciones.length){
        cambiarMensaje('Memoriza bien, Se ocultaran en 3 segundos...');
        setTimeout(ocultarCartasYEmpezarJuego, 3000);
        return;
    }

    const posicion = posiciones[indice];
    const carta = mapa[posicion];
    const elementoCarta = document.querySelector(`[dataPosicion= "${posicion}"`);

    elementoCarta.innerHTML = `<img src="${carta.image}" alt="carta">`;
    cambiarMensaje(`Carta ${indice + 1} de ${nivel.numeroCartas}`);

    setTimeout(() => {
        mostrarCartasUnaPorUna(posiciones, mapa, indice + 1);
    }, nivel.tiempoMostrar);
}


function ocultarCartasYEmpezarJuego() {
    mostrandoCartas = false;
    juegoActivo = true;
    secuenciaJugador = [];

    cambiarMensaje('¡Ahora haz clic en las cartas en el mismo orden!');

    const todasLasCartas = document.querySelectorAll('.carta');
    todasLasCartas.forEach((carta,posicion) =>{
        carta.onclick = () => cartaClickeada(posicion);
    });
}

function cartaClickeada (posicion){
    if(!juegoActivo || mostrandoCartas) return;
    const carta = document.querySelector(`[dataPosicion= "${posicion}"`);
    const cartaCorrespondiente = encontrarCartaPorPosicion(posicion);
    carta.innerHTML = `<img src="${cartaCorrespondiente.image}" alt="Carta">`;
    carta.onclick = null;
    secuenciaJugador.push(posicion);
    verificarJugada(posicion);
}

function verificarJugada(posicionClickeada) {
    const indiceActual = secuenciaJugador.length - 1;
    const posicionCorrecta = secuenciaCorrecta[indiceActual];

    if (posicionClickeada === posicionCorrecta) {

        if (secuenciaJugador.length === secuenciaCorrecta.length) {
            
            juegoGanado();
        } else {
            
            const restantes = secuenciaCorrecta.length - secuenciaJugador.length;
            cambiarMensaje(`¡Correcto! Faltan ${restantes} cartas`);
        }
    } else {
        juegoPerdido();
    }
}

function juegoGanado(){
    juegoActivo = false;
    cambiarMensaje('¡Excelente! ¡Has completado la secuencia correctamente!');
    const boton = document.getElementById('botonJuego');
    boton.disabled = false;
    boton.textContent = 'Nuevo Juego';
    boton.style.opacity = '1';
    boton.style.cursor = 'pointer';
}

function juegoPerdido(){
    juegoActivo = false;
    cambiarMensaje('¡Incorrecto! Intenta de nuevo');

    mostrarTodasLasCartas();

    setTimeout(() => {
        const boton = document.getElementById('botonJuego');
        boton.disabled = false;
        boton.textContent = 'Intentar de Nuevo';
        boton.style.opacity = '1';
        boton.style.cursor = 'pointer';
    }, 2000);
}

function crearOrdenAleatorio(cantidad) {
    const array = [];
    for (let i = 0; i < cantidad; i++) {
        array.push(i);
    }

    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}


function encontrarCartaPorPosicion(posicion) {
    const indiceEnSecuencia = secuenciaCorrecta.indexOf(posicion);
    return cartasDelJuego[indiceEnSecuencia];
}


function mostrarTodasLasCartas() {
    secuenciaCorrecta.forEach((posicion, indice) => {
        const carta = cartasDelJuego[indice];
        const elemento = document.querySelector(`[dataPosicion="${posicion}"]`);
        elemento.innerHTML = `<img src="${carta.image}" alt="carta">`;
        elemento.onclick = null;
    });
}


function limpiarCartas() {
    document.getElementById('zonaCartas').innerHTML = '';
}


function cambiarMensaje(nuevoMensaje) {
    document.getElementById('mensaje').textContent = nuevoMensaje;
}


function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}