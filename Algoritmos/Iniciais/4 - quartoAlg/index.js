// Quantos anos?

let ano = 2010;
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let idade = anoAtual - ano;

console.log(`Você tem/terá ${idade} anos este ano`);

// if
if (idade >= 21) {
    console.log(`e você terá atingido a maior idade.`);
} 

// if else

let num = 3;

if (num % 2 == 0) 
{
    console.log(`O número ${num} é par!`);
} 
else 
{
    console.log(`O número ${num} é impar!`);
}

// if else if = IMC

let massa = 55.5;
let altura = 1.56;

let res = massa/(altura**2)

if (res < 17)
{
    console.log(`MAGREZA ${res.toFixed(2)}`)
}
else if ((res >= 17) && (res < 18.5))
{
    console.log(`ABAIXO DO PESO ${res.toFixed(2)}`)
} 
else if ((res >= 18.5) && (res < 25)) 
{
    console.log(`IDEAL ${res.toFixed(2)}`)
}
else if ((res >= 25) && (res < 30)) 
{
    console.log(`SOBREPESO ${res.toFixed(2)}`)
}
else if ((res >= 30) && (res < 35))
{
    console.log(`OBESIDADE ${res.toFixed(2)}`)
} 
else if ((res >= 35) && (res < 40)) 
{
    console.log(`OBESIDADE GRAVE ${res.toFixed(2)}`)
}
else 
{
    console.log(`OBESIDADE MÓRBIDA ${res.toFixed(2)}`)
}
