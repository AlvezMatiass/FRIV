// Variables

let tranformar_cambiar = document.getElementById("ind_formulario_conteiner");

// let movimiento registrarte

let boton_registrar_movimiento = document.getElementById("ind_registrarse_movimiento");
let boton_salir_movimiento = document.getElementById("ind_salir_movimiento");

// let movimiento iniciar sesion

let transformar_cambiar_iniciar_sesion = document.getElementById("ind_formulario_conteinerDos");

let boton_iniciar_movimiento = document.getElementById("ind_iniciar");
let boton_salir_iniciar = document.getElementById("ind_salir_movimiento_iniciar");

// let registrarse

let registrar_usuario = document.getElementById("ind_formulario_registrar");
let registrar_password = document.getElementById("ind_formulario_password");

let enviar_registrar = document.getElementById("ind_formulario");

// let iniciar sesion

let iniciar_usuario = document.getElementById("ind_formulario_iniciar");
let iniciar_password = document.getElementById("ind_formulario_password_iniciar");

let iniciar_sesion = document.getElementById("ind_formulario_pass");
let error_iniciar = document.getElementById("error_iniciar_sesion");

//
// eventos registrarse
//


boton_registrar_movimiento.addEventListener("click" , function(){
    tranformar_cambiar.style.transform = "translateY(0)";
    tranformar_cambiar.style.transition = "1s";
});
boton_salir_movimiento.addEventListener("click" , function(){
    tranformar_cambiar.style.transform = "translateY(-2000px)";
    tranformar_cambiar.style.transition = "1s";
});

//
// eventos iniciar sesion
//

boton_iniciar_movimiento.addEventListener("click" , function(){
    transformar_cambiar_iniciar_sesion.style.transform = "translateY(0)";
    transformar_cambiar_iniciar_sesion.style.transition = "1s";
});
boton_salir_iniciar.addEventListener("click" , function(){
    transformar_cambiar_iniciar_sesion.style.transform = "translateY(-2000px)";
    transformar_cambiar_iniciar_sesion.style.transition = "1s";
});

//
// arreglo de usuarios
//

let usuario_contenedor = [];

class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }
}

//
// registrarse
//

enviar_registrar.addEventListener("submit" , (e) => {
    e.preventDefault();

    
    if(registrar_password.value != "" && registrar_usuario.value != ""){
        let nuevo_usuario = new Usuario(registrar_usuario.value , registrar_password.value);
        usuario_contenedor.push(nuevo_usuario);
        console.log(usuario_contenedor);

        let arregloJSON = JSON.stringify(usuario_contenedor);
        localStorage.setItem("usuario_contenedor" , arregloJSON);

        let recuperarJSON = localStorage.getItem("usuario_contenedor");

        recuperarJSON = JSON.parse(recuperarJSON);   

        tranformar_cambiar.style.transform = "translateY(-2000px)";
        tranformar_cambiar.style.transition = "1s";
    }    
});

//
// iniciar sesion
//

iniciar_sesion.addEventListener("submit" , (e) =>{
    e.preventDefault();

    let us = iniciar_usuario.value;
    let pa = iniciar_password.value;

    for(let user of usuario_contenedor){
        if(us == user.usuario && pa == user.password){
            localStorage.setItem("Usuario", user.usuario);
            window.location.href = "./pages/juegos.html"
        } else {
            error_iniciar.innerHTML = "<p>Usuario no encontrado :(</p>";
        }
    }  
});






