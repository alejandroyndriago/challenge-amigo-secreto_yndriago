// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let amigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

//Funcion para agregar amigo con el boton desde el DOM
function agregarAmigo() {
    if (amigo.value == "") {
        alert("Por favor inserte un nombre");
    } else {
    nombresAmigos.push(amigo.value);
    //Dejara el campo en blanco luego de agregar el nombre a la lista
    amigo.value = "";
    console.log(nombresAmigos);
    }
}


function amigoEnPantalla() {

    for (let index = 0; index < nombresAmigos.length; index++) {
        const element = array[index];
        
    }
}