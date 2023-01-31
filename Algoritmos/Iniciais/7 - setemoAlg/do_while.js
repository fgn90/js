let s = 0;
let n = 0;
let resp;

// Repita enquanto a resposta for diferente de "N"
do {
    n = prompt(`Digite o valor:`)
    s = Number(s) + Number(n);
    resp = prompt(`Voce quer continuar? [S/N]:`)
} while (resp !== "N");

alert(`A soma de todos os valores digitados é: ${s}`);
