
// cargamos las id del html

let cuadrado = document.getElementsByClassName("s_cuadrados");
let puntuacion_numero = document.getElementById("s_puntaje");
let empezar_boton = document.getElementById("s_empezar");

// controles para celular

let arriba = document.getElementById("s_arriba");
let abajo = document.getElementById("s_abajo");
let derecha = document.getElementById("s_derecha");
let izquierda = document.getElementById("s_izquierda");

// variables para el juego

let altura = 20;
let jugador_posicion = 0;
let manzana = 0;
let posicion_serpiente = [2,1,0];
let dirreccion = 1;
let puntuacion = 0;
let velocidad = 0.9;
let intervalo_tiempo = 0;
let intervalo = 0;

// funciones 

function empezar(){
    posicion_serpiente.forEach(index => cuadrado[index].classList.remove('serpiente'));
    cuadrado[manzana].classList.remove('manzana');
    clearInterval(intervalo);
    puntuacion = 0;
    manzana_random();
    dirreccion = 1;
    puntuacion_numero.innerText = puntuacion;
    intervalo_tiempo = 400;
    posicion_serpiente = [2,1,0];
    jugador_posicion = 0;
    posicion_serpiente.forEach(index => cuadrado[index].classList.add('serpiente'));
    intervalo = setInterval(movimientos , intervalo_tiempo);
}

function movimientos(){
    
    // Movimientos del jugador
    
    if ( 
        (posicion_serpiente[0] + altura >= (altura * altura) && dirreccion === altura) || 
        (posicion_serpiente[0] % altura === altura -1 && dirreccion === 1) || 
        (posicion_serpiente[0] % altura === 0 && dirreccion === -1 ) || 
        (posicion_serpiente[0] - altura < 0 && dirreccion === -altura) || 
        cuadrado[posicion_serpiente[0] + dirreccion].classList.contains('serpiente') )
        {
        return clearInterval(intervalo);
    }
    
    let cola = posicion_serpiente.pop();
    cuadrado[cola].classList.remove('serpiente');
    posicion_serpiente.unshift(posicion_serpiente[0] + dirreccion);

    // comer manzana, se le agrega un cuadrado a la serpiente

    if( cuadrado[posicion_serpiente[0]].classList.contains('manzana')) {
        cuadrado[posicion_serpiente[0]].classList.remove('manzana');
        cuadrado[cola].classList.add('serpiente');
        posicion_serpiente.push(cola);

        manzana_random()
        puntuacion++

        puntuacion_numero.textContent = puntuacion;
        clearInterval(intervalo);
        intervalo_tiempo = intervalo_tiempo * velocidad;
        intervalo = setInterval(movimientos, intervalo_tiempo);
    }

    cuadrado[posicion_serpiente[0]].classList.add('serpiente');

}

// acá para generar la manzana

function manzana_random(){
    do {
        manzana = Math.floor(Math.random() * cuadrado.length)
    } while (cuadrado[manzana].classList.contains('serpiente'))
    cuadrado[manzana].classList.add('manzana');
}

// controles

function controles(e) {
    cuadrado[jugador_posicion].classList.remove('serpiente')

    if (e.keyCode === 39){
        dirreccion = 1
    } else if (e.keyCode === 38) {
        dirreccion = -altura;
    } else if (e.keyCode === 37) {
        dirreccion = -1;
    } else if (e.keyCode === 40) {
        dirreccion = +altura;
    }

}

// controles botones

arriba.addEventListener("click" , () => {
    dirreccion = -altura
})
abajo.addEventListener("click", () => {
    dirreccion = +altura;
})
derecha.addEventListener("click", () => {
    dirreccion = 1
})
izquierda.addEventListener("click", () => {
    dirreccion = -1
})

document.addEventListener('keyup', controles);
empezar_boton.addEventListener('click', empezar);





