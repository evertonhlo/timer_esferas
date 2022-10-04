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





let botaoCronometro = document.getElementById('btn-play-pause')



botaoCronometro.addEventListener('click', cronometrando)


;

function cronometrando() {
    
    var cronometro = setInterval(() => {
        var retrocedeSegundos =  entradaSegundos.value --
        var retrocedeMinutos =  entradaMinutos.value - 1
        var retrocedeHoras=  entradaHoras.value - 1
        console.log(cronometro)

        if (retrocedeSegundos ===0) {
           entradaSegundos.value = 59
            }
       
        if(entradaSegundos.value === 59 && entradaMinutos.value ===0){
            entradaHoras.value = entradaHoras.value - 1
        }
        if (entradaSegundos.value  ==59 && entradaMinutos.value >=1 <=59){
            entradaMinutos.value --
            entradaSegundos.value = 59
        }
        if (entradaSegundos.value  >=0 && entradaMinutos.value <=1 && entradaHoras.value >=1){
             entradaHoras.value = retrocedeHoras
            entradaSegundos.value = 59
            entradaMinutos.value = 59
        }

         if(entradaMinutos.value <=0 && entradaSegundos.value  <=0 && entradaHoras.value <=0){
             clearInterval(cronometro)
         }   
   

    }, 1000)

}
    // const parar = document.getElementById('btn-play-pause')

    // parar.addEventListener('click', function () {
    //     console.log('zerando')
    //     entradaHoras.value = entradaHoras.value
    //     entradaMinutos.value = entradaMinutos.value
    //     entradaSegundos.value = entradaSegundos.value
    //     clearInterval(cronometro)
    // })
    // const botaoResetar = document.getElementById('btn-resetar')
    
    // botaoResetar.addEventListener('click', zerar)
    
    
    
    //         function zerar() {
    
    //             clearInterval(cronometro)
    //             console.log('zerando')
    //             entradaHoras.value = ''
    //             entradaMinutos.value = ''
    //             entradaSegundos.value = ''
    //         }
 
        
        
        
      
        

        // entradaSegundos.value 
        // entradaMinutos.value = entradaMinutos.value
        // entradaHoras.value = entradaHoras.value


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
