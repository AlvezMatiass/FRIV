// let botones

let rondas = document.getElementById("rondas");
let cuadrados = document.getElementsByClassName("cuadrado");
let empezar = document.getElementById("empezar");

//
// JUEGO
//

class Juego {
    constructor(rondas, cuadrados, empezar){
        this.rondas = 0;
        this.posicion_usuario = 0;
        this.rondas_totales = 40;
        this.secuencia = [];
        this.velocidad = 1100;
        this.bloquear_botones = true;
        this.cuadrado = Array.from(cuadrados);
        this.display = {
            empezar,
            rondas
        }
        this.fallar = new Audio('../simon_sonidos/perder.wav');
        this.sonido_botones = [
            new Audio('../simon_sonidos/uno.mp3'),
            new Audio('../simon_sonidos/dos.mp3'),
            new Audio('../simon_sonidos/tres.mp3'),
            new Audio('../simon_sonidos/cuatro.mp3')
        ]
    }

    init() {
        this.display.empezar.onclick = () => this.iniciar_juego();
    }

    iniciar_juego(){
        this.display.empezar.disabled = true;
        this.sumar_ronda(0);
        this.posicion_usuario = 0;
        this.secuencia = this.crear_secuencia();
        this.cuadrado.forEach((element, i) => {
            element.classList.remove('ganador');
            element.onclick = () => this.cuadrado_click(i);
        });
        this.mostrar_secuencia();
    }

    sumar_ronda(value){
        this.rondas = value;
        this.display.rondas.textContent = `Ronda ${this.rondas}`;
    }

    crear_secuencia(){
       return Array.from({length: this.rondas_totales}, () =>  this.color_random());
    }

    color_random(){
        return Math.floor(Math.random() * 4);
    }

    cuadrado_click(value){
       !this.bloquear_botones && this.validar_color(value);
    }

    validar_color(value){
        if(this.secuencia[this.posicion_usuario] === value){
            this.sonido_botones[value].play();
            if(this.rondas === this.posicion_usuario){
                this.sumar_ronda(this.rondas + 1);
                this.velocidad / 1.02;
                this.fallar_juego();
            } else {
                this.posicion_usuario++
            }
        } else {
            this.perder_juego();
        }
    }

    fallar_juego(){
        if (this.rondas === this.rondas_totales){
            this.ganar_juego();
        } else {
            this.posicion_usuario = 0;
            this.mostrar_secuencia();
        };
    }

    mostrar_secuencia(){
       this.bloquear_botones = true;
       let secuenciaIndex = 0;
       let tiempo = setInterval(() => {
        let boton = this.cuadrado[this.secuencia[secuenciaIndex]];
        this.sonido_botones[this.secuencia[secuenciaIndex]].play();
        this.cambiar_color_cuadrado(boton)
        setTimeout( () => this.cambiar_color_cuadrado(boton), this.velocidad / 2)
        secuenciaIndex++;
        if(secuenciaIndex > this.rondas) {
            this.bloquear_botones = false;
            clearInterval(tiempo);
        }
       }, this.velocidad);
    }

    cambiar_color_cuadrado(boton){
       boton.classList.toggle('active')
    }

    perder_juego(){
        this.fallar.play();
        this.display.empezar.disabled = false;
        this.bloquear_botones = true;
    }

    ganar_juego(){
        this.display.empezar.disabled = false;
        this.bloquear_botones = true;
        this.cuadrado.forEach(element => {
            element.classList.add('ganador');
        });
        this.sumar_ronda('Copa')
    }

}


let juego = new Juego(rondas, cuadrados, empezar);
juego.init();
