let n1 = 1000;
let n2 = 2.5981651981;
//n1 = n1.toString(); //Transforma definitivamente o n1 para string.

console.log(n1.toString() + n2); // Transformação do n1 para uma string apenas nesse momento do código, realizando assim a concatenação dos valores das duas variáveis. 
console.log(n1.toString(2)); // Representação binária do valor do n1.

console.log(n2.toFixed(2)); // Arredonda o número para cima.
console.log(Number.isInteger(n1)); // Retorna um verdadeiro ou falso se a variável está retornando um valor do tipo inteiro. Caso seja número com virgula, a resposta será false por ser um número do tipo float. Essa função de validação existe para mais tipos de dados como o NaN.

let n3 = 0.7;
let n4 = 0.1;

console.log(n3 + n4); // O JS utiliza um padrão de calcula meio incerto retornando assim alguns valores não corretos. Essa soma, era para dar 0.8, mas não é o que acontece.

n3 += n4; //0.8
n3 += n4; //0.9
n3 += n4; //1.0

n3 = parseFloat(n3.toFixed(2)) // Utilizar o parseFloat ou Number corrige esse problema, tornando assim a conta mais precisa. 

console.log(n3);
