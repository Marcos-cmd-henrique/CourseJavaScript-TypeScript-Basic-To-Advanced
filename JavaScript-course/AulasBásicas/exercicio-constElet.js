/*
Marcos Henrique Correa tem 26 anos, pesa 100 kg
tem 1.71 de altura e seu IMC é de 34.19855682090216
Marcos Henrique nasceu em 1996
*/
const nome = 'Marcos Henrique';
const sobrenome = 'Correa';
const idade = 26;
const peso = 100;
const alturaEmM = 1.71; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);