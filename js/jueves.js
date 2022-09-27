// LUXON

let DateTime = luxon.DateTime;
let dt = DateTime.now();

// variables

let jueves_contenedor = document.getElementById("j_conteiner");

/* 
    Explicacion, esto que hice se trata sobre un meme de un Anime
    donde un personaje te dice "feliz jueves", entonces lo que hice es
    que la pagina siempre que sea jueves te ponga la frase más el video
    donde lo dice.
*/

if(dt.weekday === 4){
    jueves_contenedor.innerHTML = `
    <p class="j_titulo">¡Feliz Jueves!</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/BvtUSsok4JA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
} else {
    jueves_contenedor.innerHTML = `<p class="j_titulo">Hoy no es Jueves</p>
    <img src="https://i.pinimg.com/originals/c5/6d/3d/c56d3dff813080457c8c2987cd22605d.png" alt="">
    ` 
}

