let A = 'A';
let B = 'B';
let C = 'C';
const i = A;

A = B
B = C
C = i

[A, B, C] = [B, C, A] // Forma nova para solucionar o exercício, sem precisar criar uma nova variável.


console.log(A, B, C);