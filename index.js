// import{Aluno} from "./Alunos.js"

// var aluno = new Aluno('','aluno',10,7,5)

// console.log(aluno.final())


// function qualEMaior(numero1, numero2, numero3){
//     if (numero1 > numero2 && numero1 > numero3) {
//         return numero1
// }
//     if (numero2 > numero1 && numero2 > numero3){
//         return numero2
//     }
//     if (numero3 > numero1 && numero3 > numero2){
//         return numero3
//     }
// }

//  console.log (qualEMaior(100,20,30)) 

// function verificar (numero){
//     if (numero % 2 == 0){
//        if (numero >= 0){
//            return   `esse numero ${numero} e par e positivo`
//        } else {
//            return   `esse numero ${numero} e par e negativo`
//        }
//     }


//     if (numero % 2 == 1 || numero % 2 == -1) {
//         if (numero >= 0){
//             return   `esse numero ${numero} e impar e positivo`
//         } else {
//             return   `esse numero ${numero} e impar e negativo`
//         }
//     }
// }
// console.log(verificar(-15))

// function transformarTemp(temperatura){
//    let celcius = 5*(temperatura-32)/9 
//     return `A temperatura em fahrenheit ${temperatura} e em celcius ${celcius.toFixed(1)}`
    
   
// }
// console.log(transformarTemp(68))

function pesoIdeal(altura, sexo){
    if (sexo == 'F'){
        return(62.1*altura) -44,7
    }else{
        return(72.7*altura) -58
    }
}
console.log(pesoIdeal(1.90, "M"))
