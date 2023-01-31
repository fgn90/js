let n = 9;
let cont = 1;
let contDiv = 0;

do {
    
    if (n % cont == 0) {
        contDiv++;
        console.log(cont)
    }
    cont++;
} while(cont <= n)

if (contDiv > 2) {
    console.log(`O valor ${n} não é um número primo.`)
} else {
    console.log(`O valor ${n} é um número primo.`)
}


