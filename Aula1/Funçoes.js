// recapitulando a aula passada
// console.log(msg,num1)
// let again = msg + num1
// console.log(again)
let num1 = 2
const num2 = 3
var msg = "Ola Amigos ! esse é o numero: "



function soma () {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

soma()

function somaComParametros(valor1, valor2){
    console.log("O Resultado é:", valor1 + valor2)
}

somaComParametros(300,125)
