/*
Operadores Lógicos
&& - AND - E - Todas as expressões precisam ser verdadeiras para retornar true
|| - OR - OU - Pelo menos uma das expressões precisam ser verdadeiras para retornar true
! - NOT - NÃO - Inverte os valores.
*/

console.log(true && true); // AND
console.log(false || true); // OR
console.log(!false); // NOT - Negação, inverte os valores.


// Simulação de validação de acesso a sistemas
const user = 'Paulo'; // Variável de recebimento do valor pelo campo formulário
const pass = '123456'; // Variável de recebimento do valor pelo campo formulário

const vaiLogar = user === 'Paulo' && pass === '123456';
const naoVaiLogar = user === 'Paulo' && pass === '1234';
console.log(vaiLogar)
console.log(naoVaiLogar)