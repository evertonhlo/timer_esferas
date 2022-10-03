// Minutos

const entradaMinutos = document.getElementById('minuto')
entradaMinutos.addEventListener('change', pegarConteudo)


function pegarConteudo() {
    console.log(entradaMinutos.value)
}


// Segundos

const entradaSegundos = document.getElementById('segundo')

entradaSegundos.addEventListener('change', pegarConteudo)


function pegarConteudo() {
    console.log(entradaSegundos.value)
}

// Horas

const entradaHoras = document.getElementById('hora')

entradaHoras.addEventListener('change', pegarConteudo)


function pegarConteudo() {
    console.log(entradaHoras.value)
}




// #####

// const pegaBotaoEnviar = document.getElementById('enviar')

//  pegaBotaoEnviar.addEventListener('click', previneEvento)


// function previneEvento(e){
//         e.preventDefault
//         console.log('previniu')
//     // const hora = document.createElement("p")
//         insereElemento()
//    }



// function insereElemento (){
//     if (entradaSegundos.value == false) {
//         alert('insira um numero válido')
// } else{

//     const pegaMostrador = document.getElementById('mostrador')
//         pegaMostrador.innerHTML = entradaSegundos.value

//     document.getElementById('mostrador').replaceWith(pegaMostrador)

// }
// }


// #####

const botaoCronometro = document.getElementById('btn-play-pause')

botaoCronometro.addEventListener('click', cronometrando)

function cronometrando() {

    var cronometro = setInterval(() => {
        retrocederSegundos = entradaSegundos.value--
        console.log(retrocederSegundos)
        if (entradaSegundos.value < 0) {
            entradaSegundos.value = 59
        }
        if (entradaSegundos.value >= 59) {
            retrocederMinutos = entradaMinutos.value--
        }
        if(entradaSegundos.value == 0 && entradaMinutos.value == 0 && entradaHoras.value ==''){
            entradaHoras.value = 0
            clearInterval(cronometro)
        }
        if (entradaMinutos.value <= 0) {
            entradaMinutos.value = ''
        }
        if (entradaSegundos.value == '' && entradaMinutos.value == '') {
            entradaHoras.value = ''

        }

        // if (entradaMinutos.value == '' && entradaSegundos.value == 0) {
        //     retrocedHoras = entradaHoras.value--
        // }
        if (entradaSegundos.value == 0) {
            entradaSegundos.value == ''
        }


        if(entradaMinutos.value == 0 && entradaSegundos.value == 0){
            entradaHoras.value= 0
            
        }

        if (entradaHoras.value == 0 && entradaMinutos.value == '' && entradaSegundos.value == 0) {
            entradaHoras.value = ''
            entradaMinutos.value = ''
            entradaSegundos.value = ''
            clearInterval(cronometro)
        }


        const botaoResetar = document.getElementById('btn-resetar')

        botaoResetar.addEventListener('click', zerar)

        function zerar() {

            console.log('oi')
            clearInterval(cronometro)
            entradaHoras.value = ''
            entradaMinutos.value = ''
            entradaSegundos.value = ''
        }

    }, 200)
}





// console.log(botaoCronometro)