/* 
1 - Aritméticos + - / *
    + = Adição e concatenação
    ** = Potencia
    % = Resto de uma divisão

2 - Incremento e decremento = ++ e --

    Ordem de precedência: 
    1 - ()
    2 - **
    3 - * / %
    4 - + -
    Obs.: Em caso de precedências de mesmo peso, será executado na ordem em que foi escrito, da esquerda para a direita.
*/

const num1 = 2;
const num2 = 3;
const n = ' Soma'

console.log(2 + 3 + n)

let contador = 1;
contador++;
console.log(contador)

let cont = 0;
cont += 2; // contador = contador + valor declarado
cont *= 2; // contador = contador * valor declarado
cont /= 2; // contador = contador / valor declarado

console.log(cont)


const n1 = 10
const n2 = parseInt('5'); // Conversão de tipo de string para um inteiro = number
const n3 = parseFloat('5.2'); // Conversão de tipo de string para um número com virgula
const n4 = Number('5'); // Conversão de tipo de string para Number, não fazendo distinção se tiver virgula ou não.

console.log(n1 + n2 + n3 + n4)

