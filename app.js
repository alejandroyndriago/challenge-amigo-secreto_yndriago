// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
let amigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombre = amigo.value.trim(); // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor inserte un nombre válido");
        return;
    }
    
    if (nombresAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado");
        return;
    }

    nombresAmigos.push(nombre);
    amigo.value = ""; // Limpia el input
    amigoEnPantalla(); // Actualiza la lista
    console.log(nombresAmigos);
}

// Función para mostrar la lista de amigos en pantalla
function amigoEnPantalla() {
    listaAmigos.innerHTML = ""; // Limpia la lista antes de agregar elementos

    nombresAmigos.forEach((nombre) => {
        let nombreAmistad = document.createElement("li");
        nombreAmistad.textContent = nombre;
        listaAmigos.appendChild(nombreAmistad);
    });
}

function sortearAmigo() {
    if (nombresAmigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar la lista antes de mostrar los resultados

    let amigosMezclados = [...nombresAmigos]; // Clonamos el array original
    amigosMezclados = amigosMezclados.sort(() => Math.random() - 0.5); // Mezcla aleatoriamente los nombres

    let sorteos = {}; // Objeto para evitar que alguien se asigne a sí mismo

    for (let i = 0; i < amigosMezclados.length; i++) {
        let amigo1 = amigosMezclados[i];
        let amigo2 = amigosMezclados[(i + 1) % amigosMezclados.length]; // Se asegura de no asignarse a sí mismo

        sorteos[amigo1] = amigo2;

        let resultadoItem = document.createElement("li");
        resultadoItem.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(resultadoItem);
    }
}