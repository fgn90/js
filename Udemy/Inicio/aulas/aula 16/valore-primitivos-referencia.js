/*
Tipos de dados:
1 - Primitivos (valores imutáveis), sempre que um valor primitivo for passado de uma variável para outra, está sendo criada uma cópia do valor. Todos os dados primitivos: string, number, boolean, undefined, null, bigint e symbol
*/

let a = 123 // Valor original
let b = a // Cópia do valor original
a = 'A' // Valor alterado

console.log(a, b)

/* 
2 - Referência (valore mutável), são tipos de dados que fazem a mesma referencia diretamente na memória, apontam para o mesmo valor na memória. - array, object, function
*/

let A = [1, 2, 3]; // Cria a referência na memória
let B = A; // Aponta para a mesma referência utilizada pela variável A
console.log(A, B);

A.push(4); // Cria um novo elemento na memória, afetando assim tanto A e B, por possuírem a mesma referência
console.log(A, B);

B.pop()
console.log(A, B);

let C = [...B]; // Faz um spread (uma cópia do valor de B, se tornando totalmente independente uma da outra.)

C.push(4);

console.log(A, B, C);
