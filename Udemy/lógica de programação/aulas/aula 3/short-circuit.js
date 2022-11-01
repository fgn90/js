/*
Valores avaliado como false e que fingem ser avaliados como falso no JS :
- false;
- 0;
- '', "", ``;
- null / undefined;
- NaN.
*/

console.log('José' && 0 && 'Maria'); // Será retornado o valor falso
console.log('José' && 'Maria'); // Será retornado o último valor verdadeiro da expressão

function falaOi () {
    return 'Oi';
}

const exec = 0;

console.log(exec && falaOi()); // Será avaliada a primeira condição, se for verdadeira, será executada a avaliação na próxima, retornando como valor final a última verdadeira da expressão. Caso a primeira seja falsa, irá retornar a primeira.

console.log(0 || false || null || 'Carlos' || true); // Será retornada o primeiro valore verdadeiro da expressão.

const corUser = null;
const corPadrao = corUser || 'Preto'; // Quando o usuário alterar a cor, a variável corUser deixará de ser false e se tornará verdadeira, adicionando assim o valor final escolhido pelo usuário.

console.log(corPadrao);