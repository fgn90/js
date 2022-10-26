let texto = "Um \"texto\"" // Funciona como uma forma de escape, para "bular" o JS. Não é muito utilizado.

let texto2 = 'O rato roeu a roupa do rei de roma.'



console.log(texto)
console.log(texto[4]) // Mostra item de índice 4 na string.
console.log(texto.indexOf('texto')) // Retorna o índice que o texto começa. 
console.log(texto.indexOf('o', 3)) // Realizar uma busca da letra ou palavra predefinida a partir do índice informado. Retorna o índice que o texto começa. 
console.log(texto.lastIndexOf('o', 3)) // Realizar uma busca de trás para frente da letra ou palavra predefinida a partir do índice informado. Retorna o índice que o texto termina. 
console.log(texto.replace('Um', 'Outra')) // Podem ser utilizadas ou não expressões regulares. Função que realiza a substituição de uma palavra por outra.

console.log(texto2.replace(/r/g, 'T')) // Os parenteses representam uma expressão regular. Onde ela procura todo R e substitui por T. Caso retiremos o G da expressão, só será substituído o primeiro R.
console.log(texto2.length); // Retorna o tamanho da quantidade de caracteres.
console.log(texto2.slice(2,6)) // Retorna o que está dentro do espaço definido. É possível utilizar valores negativos. 
console.log(texto2.slice(-5))
console.log(texto2.slice(-5, -1)) // Retira o índice final que seria o ponto.
console.log(texto2.split(' ', 2)) // Quebra a frase de acordo com o caractere definido, onde o valor final representa a quantidade de vezes que será executada a quebra.
console.log(texto2.toUpperCase()); // Retorna os valores em maiúsculo. 
console.log(texto2.toLocaleLowerCase()); // Retorna os valores em minusculo. 
