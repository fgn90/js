// Apto/inapto

let ano = 2020;
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let idade = anoAtual - ano;

// if
if (idade >= 18) {
    console.log(`----------STATUS----------`);
    console.log(`IDADE: ${idade}`);
    console.log(`APTO PARA TIRAR A CARTEIRA`);
    console.log(`--------------------------`);
} else {
    console.log(`-----------STATUS-----------`);
    console.log(`IDADE: ${idade}`);
    console.log(`INAPTO PARA TIRAR A CARTEIRA`);
    console.log(`----------------------------`);
}
