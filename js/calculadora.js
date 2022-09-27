//variables

let formulario = document.getElementById("c_formulario");

let num_a = document.getElementById("c_nuno");
let num_b = document.getElementById("c_ndos");

let suma = document.getElementById("c_suma");
let resta = document.getElementById("c_resta");
let division = document.getElementById("c_division");
let multiplicacion = document.getElementById("c_multi");

let resultado = document.getElementById("c_resultado");

// suma

suma.addEventListener("click" , () => {  
    let res_a = parseFloat(num_a.value)
    let res_b = parseFloat(num_b.value)

    let result = res_a + res_b;
    resultado.innerText = result;
})

// resta

resta.addEventListener("click" , () => {
    let res_a = parseFloat(num_a.value)
    let res_b = parseFloat(num_b.value)
    
    let result = res_a - res_b;
    resultado.innerText = result;
})

// multiplicacion

multiplicacion.addEventListener("click" , () => {  
    let res_a = parseFloat(num_a.value)
    let res_b = parseFloat(num_b.value)

    let result = res_a * res_b;
    resultado.innerText = result;
})

// division

division.addEventListener("click" , () => {  
    let res_a = parseFloat(num_a.value)
    let res_b = parseFloat(num_b.value)

    let result = res_a / res_b;
    resultado.innerText = result;
})