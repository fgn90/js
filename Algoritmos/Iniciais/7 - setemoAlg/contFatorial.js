//Fatorial Simples
let fatorial = 5;
let cont = fatorial;
let f = 1;

do {
    f = f * cont;
    cont--;
} while ( cont > 1)

console.log(`O fatorial de ${fatorial}! é ${f}`)

//Repetição dentro de Repetição



do {
    n = prompt(`Digite o valor:`)
    let cont2 = n;
    let f2 = 1;

    do {
        f2 = f2 * cont2;
        cont2--;
    } while ( cont2 > 1)

    alert(`O fatorial de ${n}! é ${f2}`)
    resp = prompt(`Voce quer continuar? [S/N]:`)

} while (resp !== "N");
