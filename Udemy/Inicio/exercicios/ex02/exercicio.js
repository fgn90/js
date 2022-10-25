const nome = 'João';
const sobrenome = 'da Silva';
const idade = 30;
const peso = 80;
const alturaEmM = 1.70;
// Cria uma instância de objeto para armazenar o ano atual 
const date = new Date();
const anoAtual = date.getFullYear();

let indiceMassaCorporal;
indiceMassaCorporal = peso/(alturaEmM*alturaEmM);

let anoNascimento;
anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento} e tem ${idade} anos pesando ${peso} kg.`);
console.log( `Sua altura é de ${alturaEmM}M e seu IMC é de ${indiceMassaCorporal}.`);