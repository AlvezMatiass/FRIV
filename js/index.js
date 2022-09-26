// Variables

let tranformar_cambiar = document.getElementById("ind_formulario_conteiner");

// let movimiento registrarte

let boton_registrar_movimiento = document.getElementById("ind_registrarse_movimiento");
let boton_salir_movimiento = document.getElementById("ind_salir_movimiento");

// let movimiento iniciar sesion

let transformar_cambiar_iniciar_sesion = document.getElementById("ind_formulario_conteinerDos");

let boton_iniciar_movimiento = document.getElementById("ind_iniciar");
let boton_salir_iniciar = document.getElementById("ind_salir_movimiento_iniciar");

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

// let iniciar sesion

let iniciar_usuario = document.getElementById("ind_formulario_iniciar");
let iniciar_password = document.getElementById("ind_formulario_password_iniciar");

let iniciar_sesion = document.getElementById("ind_formulario_pass");
let error_iniciar = document.getElementById("error_iniciar_sesion");

// let registrarse

let registrar_usuario = document.getElementById("ind_formulario_registrar");
let registrar_password = document.getElementById("ind_formulario_password");

let enviar_registrar = document.getElementById("ind_formulario");


// prueba

enviar_registrar.addEventListener("submit" , (e) => {
    e.preventDefault();

    let user_reg = registrar_usuario.value;
    let pass_reg = registrar_password.value;

    let usuario = {
        user: user_reg,
        pass: pass_reg
    };

    let JSON_registrarse = JSON.stringify(usuario);
    localStorage.setItem("usuario", JSON_registrarse);

    tranformar_cambiar.style.transform = "translateY(-2000px)";
    tranformar_cambiar.style.transition = "1s";
})


iniciar_sesion.addEventListener("submit" , (e) => {
    e.preventDefault();

    let user_in = iniciar_usuario.value;
    let pass_in = iniciar_password.value;

    let usuario_in = localStorage.getItem("usuario");
    let datos = JSON.parse(usuario_in);

    if (user_in == datos.user && pass_in == datos.pass){
        localStorage.setItem("usb" , user_in);
        window.location.href = "./pages/juegos.html"
    } else {
        error_iniciar.innerHTML = `<p>Usuario o Contraseña no encontrado</p>`;
    }
})





