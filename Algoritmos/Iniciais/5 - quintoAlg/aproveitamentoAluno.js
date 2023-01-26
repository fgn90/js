let n1 = 4;
let n2 = 2;
let media = (n1+n2)/2;

console.log(`--------------------`)
console.log(`Primeira nota: ${n1}`)
console.log(`Segunda nota: ${n2}`)


if (((n1 >= 0) && (n1 <=10)) && ((n2 >= 0) && (n2 <=10))) {
    if (media < 5) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: F`)
        console.log(`-----------------`)
    } 
    else if ((media >= 5) && (media < 5.9)) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: E`)
        console.log(`-----------------`)
    }
    else if ((media >= 6) && (media < 6.9)) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: D`)
        console.log(`-----------------`)
    }
    else if ((media >= 7) && (media < 7.9)) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: C`)
        console.log(`-----------------`)
    }
    else if ((media >= 8) && (media < 8.9)) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: B`)
        console.log(`-----------------`)
    } 
    else if ((media >= 9) && (media <= 10)) 
    {
        console.log(`--------------------`)
        console.log(`MEDIA: ${media}`)
        console.log(`APROVEITAMENTO: A`)
        console.log(`-----------------`)
    }
}
else 
{
    console.log(`--------------------`)
    console.log(`ERRO! VALOR INVÁLIDO`)
    console.log(`--------------------`) 
}



