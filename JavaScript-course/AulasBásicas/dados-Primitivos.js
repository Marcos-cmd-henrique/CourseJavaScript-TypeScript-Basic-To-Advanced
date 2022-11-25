//String, number, undefined, null, boolean, symbol 

const nome = 'Marcos' // String
const nome1 = "Marcos" // String
const nome2 = `Marcos` // String
const num1 = 10 // Number Int
const num2 = 10.52 // Number Float
let nomeAluno // undefined -> ñ aponta p/ local nenhum na memória
let sobrenomeAluno = null // Nulo -> não aponta pra local nenhum na memória
const aprovado = false; //Boolean = true, false (lógico)

//ver o tipo
console.log(typeof nome)

//ver o tipo e o valor 
console.log(typeof nome, nome)

//undefined 
console.log(typeof nomeAluno, nomeAluno)

//null - term um bug quando chama null de object, sendo que não se enquadraria 
console.log(typeof sobrenomeAluno, sobrenomeAluno)

let a = 2
let b = 0 
console.log(a, b)
