// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById("amigo").value

    if(amigos.includes(amigoNuevo)) {
        alert("El amigo ya ha sido ingresado anteriormente")
    }
    else if (amigoNuevo === "" || amigoNuevo === null) {
        alert("Por favor, ingrese un nombre valido")
    } else {

    //agrega al nuevo amigo a la lista de amigos
    amigos.push(amigoNuevo);
    //Funcion para mostrar en pantalla los amigos
    let lista = document.getElementById("listaAmigos");
    var li = document.createElement('li');
    li.innerText = amigoNuevo;
    lista.appendChild(li);
    }
    //limpia el valor del input
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if(amigos.length === 0 ) {
        alert("No hay ningun amigo para sortear.")
    }
    else{
    //Crea un numero al azar segun el largo del array de amigos y entonces busca el indice de amigos para mostrar su nombre en pantalla
    let numeroSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[numeroSorteado]
    //Elimina la lista de amigos para mostrar al amigo que fue sorteado
    var element = document.getElementById("listaAmigos");
    element.parentNode.removeChild(element);
    //Muestra al amigo sorteado
    document.getElementById("resultado").innerHTML = "Amigo Sorteado: " + '"' + amigoSorteado + '"' + " !";
    console.log("Amigo sorteado: " + amigoSorteado)
    }
}