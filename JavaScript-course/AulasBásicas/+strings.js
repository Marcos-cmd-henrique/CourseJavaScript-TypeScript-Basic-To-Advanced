/* let umaString = "Um \"testo\"" 
console.log(umaString) */ 

// trabalhando com STRINGS 

//charAt(), retorna o valor da posição da string 

/* let umaString = "Um texto"
console.log(umaString.charAt(7)) */
// neste caso a letra O


// concat(), faz a concatenação das strings 

/* let umaString = "Um texto"
console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo dia')) // usando concat
console.log(umaString + ' em um lindo dia') // usando concatenação 
console.log(`${umaString} em um lindo dia`) // templates strings , o melhor */

// neste caso vai ser impresso: Um texto em um lindo dia 


//indexOf(), verifica onde começa a palavra (indice) que você pretende saber 

/* let umaString = "Um texto"
console.log(umaString.indexOf('texto'))  */

/* console.log(umaString.indexOf('o', 3)) */ //verifica a posição 

// será impresso: 3 , pois a palavra texto começa no indice 3 
/* Se eu colocar o texto diferente do que esta escrito, não achará, ex: Texto, 
dentro do indexOf imprimirá -1, pois o T é maiúsculo  */  


//lastIndexOf(), verifica de trás para frente

/* let umaString = "Um texto"
console.log(umaString.lastIndexOf('o'))  */

//será impressa o 7, pois começa contanto de tras pra frente mas ver o indice correto 



//match(), expressão regular 

/* let umaString = "Um texto"
console.log(umaString.match(/[a-z]/g))  */

//será impresso: [ 'm', 't', 'e', 'x', 't', 'o' ], ou seja, todas as letras minúsculas 

/* console.log(umaString.match(/[a-z]/))  */ //está sem o g 
//será impresso: [ 'm', index: 1, input: 'Um texto', groups: undefined ]

//search(), retorna o indice, igual o indexOf, só que ele aceita expresões regulares
/* console.log(umaString.search(/[a-z]/g)) 
console.log(umaString.search(/x/)) // retorna onde tem o x  */ 


//replace(), modifica o valor(conteudo/) de uma string 
/* let umaString = 'Um texto'
console.log(umaString.replace('Um', 'Dois')) //substitui a palavra Um para Dois: Dois texto
console.log(umaString.replace(' ', 'Dois')) // substitui o espaço por Dois: UmDoistexto
console.log(umaString.replace(/Um/, 'Dois')) // substitui o espaço por Dois: Dois texto */


/* let umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.replace(/r/, '#')) //transforma o r em # 
console.log(umaString.replace(/r/g, '#')) //transforma todos os r em # , usando o g  */

 //length(), retorna o valor total da string 
/* let umaString = 'O rato roeu a roupa do rei de roma.' */
/* console.log(umaString.length) */ // será impresso: 35 
/* console.log(umaString.slice(-3)) // será impresso: ma. AS ULTIMAS PALAVRAS  */ 



//split(), transforma tudo em arrays 

/* let umaString = 'O rato roeu a roupa do rei de roma.'
console.log(umaString.split(' '))  //divido a palavra pelos espaços 
console.log(umaString.split(' ', 2)) //executa so 2x 
console.log(umaString.split('r')) //que apague o r  */

