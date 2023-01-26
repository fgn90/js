// Quantos anos?

let ano = 1996;
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

console.log(`Você tem/terá ${anoAtual - ano} anos este ano.`);

// Compra dolar

let dinReal = 1000;
let valorDolar = 5.77;
let calc = dinReal/valorDolar;

console.log(`Você tem ${dinReal} em Real e poderá comprar ${calc.toFixed(2)} dólares`)

// Temperatura F para C

let tempEUA = 100;
let res = (tempEUA -32)/1.8;

console.log(`A temperatura atual é de ${res.toFixed(1)} graus Celsius`);

// Taxa de imposto de importação (valor pré definido 60%)

let valorTotalCompra = 1000;
let impostoPagar = (valorTotalCompra * 60)/100;

console.log(`É preciso pagar ${impostoPagar.toFixed(2)} de imposto.`)

// Empréstimo 20% do valor + parcela do valor

let valorEmprestimo = 1000;
let valorJuros = 20;
let parcelas = 10;
let valorEmprestimoComJuros = (valorEmprestimo * valorJuros)/100;

let valorParcela = (valorEmprestimoComJuros + valorEmprestimo) / parcelas;

console.log(`O empréstimo foi de ${valorEmprestimo} reais, com acréscimo de 20%. Você pagará o empréstimo em 10 parcelas de R$${valorParcela.toFixed(2)}.`)