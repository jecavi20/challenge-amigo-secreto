// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
//amigo

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value
        if (amigo != '') {
            amigos.push(amigo)
            document.getElementById('amigo').value = ''
            console.log(amigos)
        }else{
            alert('Por favor, inserte un nombre.')
        }

}

