// recapitulando a aula passada
// console.log(msg,num1)
// let again = msg + num1
// console.log(again)
let num1 = 2
const num2 = 3
var msg = "O numero É: "



function soma () {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

soma()

function somaComParametros(valor1, valor2){
    console.log("O Resultado é:", valor1 + valor2)
}

somaComParametros(300,125)

let usuario = {
    nome: "João",
    idade: 35,
    signo: "escorpião",
    calvo: true
}

console.log (typeof usuario)
console.log(
    "nome:" , usuario.nome,
    "\n idade:", usuario.idade
)

console.log(typeof usuario.calvo)

const somamelhorada = (n1, n2) => {
    let resultadoNovaFunc = ''
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        resultadoNovaFunc = n1 + n2 
        return "Resultado", resultadoNovaFunc
    }

    return "Valores de entrada invalido"
}

console.log(somamelhorada(6,9))
console.log(somamelhorada(6,"28"))