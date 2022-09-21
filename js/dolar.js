let dolarblue = document.getElementById("d_valordolar");

let input = document.getElementById("d_input");

let btn = document.getElementById("d_btn");

let resultado = document.getElementById("d_resultado");

let dolarblueb = document.getElementById("d_valordolarb");

let inputb = document.getElementById("d_inputb");

let btnb = document.getElementById("d_btnb");

let resultadob = document.getElementById("d_resultadob");


fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then(response => response.json())
    .then(data => {
        let valor = data[1].casa.compra;
        dolarblue.innerText = valor;

        btn.addEventListener("click" , () => {
            let input_num = parseFloat(input.value);
            let num_b = parseFloat(valor);

            let result = input_num / num_b;
            
            resultado.innerHTML = `
        <div class="d_res_conteiner">
            <p>${input_num} Pesos son:</p>
            <p>${result} Dolares</p>
        </div>`;

        })

        btnb.addEventListener("click" , () => {
            let input_numb = parseFloat(inputb.value);
            let num_c = parseFloat(valor);

            let result = num_c * input_numb;
            
            resultadob.innerHTML = `
        <div class="d_res_conteiner">
            <p>${input_numb} Dolares son:</p>
            <p>${result} Pesos</p>
        </div>`;

        })

        })


