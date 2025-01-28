// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista donde se guardan los amigo agregados
let amigos = []
//amigo

//Funcion para agregar amigos a la lista "amigos"
function agregarAmigo() {
    //Obtener el nombre del amigo ingresado en el campo de texto
    let amigo = document.getElementById('amigo').value

    //Validar si el campo de texto esta vacio
    if (amigo != '') {

        //agregar amigo a la lista de amigos
        amigos.push(amigo)

        //Vaciar el campo de texto luego de agregar el amigo a la lista
        document.getElementById('amigo').value = ''

    }else{

        //mostrar mensaje de alerta si intenta enviar el campo de texto de vacio
        alert('Por favor, inserte un nombre.')
    }

    //Llamar la funcion para mostrar los amigos agregados en la lista
    mostrarAmigos()

    return

}


//Funcion para mostrar amigos agregado en la lista
function mostrarAmigos(){

    //Obtener el elemento donde se van a mostrar los amigos ingresados
    let listaAmigos = document.getElementById('listaAmigos')

    //Vaciar la lista para mostrar los nombres ingresados
    listaAmigos.innerHTML = '';

        //Recorrer los nombres que contiene la lista de amigos
        for (let i = 0; i < amigos.length; i++) {

            //crear la etiqueta li para mostrar los nombres de la lista
            let lista = document.createElement('li');

            //agregar el nombre de la lista a la etiqueta li de la lista a mostrar
            lista.textContent = amigos[i];
            listaAmigos.appendChild(lista);
        }

    return
}


function sortearAmigo(){

    //Obtener el elemento html donde se va a mostrar el amigo sorteado
    let amigoSorteado = document.getElementById('resultado');

    //Verificar si la lista de amigos no esta vacia
    if (amigos.length > 0) {

        //Obtener numero aleatorio entre 0 y el numero de amigos que se encuentran en la lista
        let amigoRandom = Math.floor(Math.random() * amigos.length);

        //Mostrar el amigo sorteado seleccionado en la lista 'resultado'
        amigoSorteado.textContent = 'El amigo secreto sorteado es: '+amigos[amigoRandom];

        //Ocultar lista de amigos luego de sortear al ganador 
        document.getElementById("listaAmigos").style.display = "none";

    }else{

        //Mostrar alerta de que no hay amigos en la lista
        alert('Debe agregar amigos pàra poder sortear')

    }
    
    return

}

