console.log(`--------------`)
console.log(` ESCOLA TESTE`)

let n1 = 6;
let n2 = 8;
let media = (n1+n2)/2;

if (((n1 >= 0) && (n1 <=10)) && ((n2 >= 0) && (n2 <=10))) {
    if ((media >= 7) && (media <=10)) {
        console.log(`--------------`)
        console.log(`MÉDIA: ${media}`)
        console.log(`ALUNO APROVADO`)
        console.log(`--------------`) 
    } 
    else
    {
        console.log(`---------------`)
        console.log(`MÉDIA: ${media}`)
        console.log(`ALUNO REPROVADO`)
        console.log(`---------------`) 
    }     
} 
else 
{
    console.log(`--------------------`)
    console.log(`ERRO! VALOR INVÁLIDO`)
    console.log(`--------------------`) 
}

