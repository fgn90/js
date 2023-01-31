let n = 0;
let cont = 1;
let neg = 0;

do {
    n = prompt(`Digite um número:`)
    cont++

    if (Number(n) < 0) {
        neg++;
    }
} while(cont <= 5)
alert(`Foram digitados ${neg} números negativos.`)