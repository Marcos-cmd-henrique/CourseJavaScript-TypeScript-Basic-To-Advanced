// Operadores Aritméticos, de atribuição e incremento

/* Aritméticos 
* + Adição / Concatenação 
* - / * Subtração, Divisão e Multiplicação 
*  ** Potenciação 
*  % resto da divisão 
*/



/* Precedência Matemática 
() 1° primeiro o que esta dentro de parêntese
** 2° potenciação 
* / % 3°, 4° e 5° (multiplicação, divisão e resto da divisão)
+ - 6° as contas de mais e menos 
 */
/* const num1 = 5 
const num2 = 2 
const num3 = 10 
console.log((num1 + num2) * num3)  */ 

/* Incremento = ++
Decremento = -- */

/* let contador = 1
contador += 2 
console.log(contador) */


//NaN - Not a Number 
/* const num1 = 10 
const num2 = 'Marcos'
console.log(num1 * num2) */

//NaN - Not a Number - string como número, pode resolver por causa da linguagem JS
/* const num3 = 10 
const num4 = '5'
console.log(num3 * num4)
console.log(typeof num4) */

//Transformando string em Number inteiro
/* const num5 = 10 
const num6 = parseInt('5')
console.log(num5 * num6)
console.log(typeof num6) */

//Transformando string em Number float
/* const num7 = 10 
const num8 = parseFloat('5.2')
console.log(num7 + num8)
console.log(typeof num8) */

//Transformando string em Number TANTO EM INTEIRO QUANTO FLOAT ao mesmo tempo
/* const num7 = 10 
const num8 = Number('5') // or Number('5.2')
console.log(num7 + num8)
console.log(typeof num8) */