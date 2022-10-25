console.log('Valor "literal"'); // Facilita para colocar texto entre aspas duplas - Sempre que for utilizado desta forma, o valor dentro dele será do tipo String
console.log("Valor 'literal'"); // Facilita para colocar texto entre aspas simples - Sempre que for utilizado desta forma, o valor dentro dele será do tipo String
console.log(`"Valor 'literal'"`); // Facilita para colocar texto entre aspas duplas e simples, mais maleável de todos. - Sempre que for utilizado desta forma, o valor dentro dele será do tipo String

console.log(123456, 15.85) // Números fora das '', "" e `` são considerados do tipo Number
console.log(123456, 15.85, `Valor literal`)