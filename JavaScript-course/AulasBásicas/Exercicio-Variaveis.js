// Exercicio com Variáveis: 
/* 
let varA = 'A' // APONTA PARA B 
let varB = 'B' // APONTA PARA C 
let varC = 'C' // APONTA PARA A 

console.log(varA, varB, varC) */

// Minha resolução 
/* let varA = 'A' // APONTA PARA B 
let varB = 'B' // APONTA PARA C 
let varC = 'C' // APONTA PARA A 

const varAB = varB
const varBC = varC
const varCA = varA

console.log(varAB, varBC, varCA)  */

// Resolução do professor

/* let varA = 'A' // APONTA PARA B 
let varB = 'B' // APONTA PARA C 
let varC = 'C' // APONTA PARA A 

const varATemp = varA
varA = varB
varB = varC
varC = varATemp

console.log(varA, varB, varC)  */

// Outra resolução mais apropriada e avançada 
/* let varA = 'A' // APONTA PARA B 
let varB = 'B' // APONTA PARA C 
let varC = 'C' // APONTA PARA A 

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)   
 */
