// Índice          0        1       2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Alteração de dados de um array
alunos[0] = 'Eduardo';
console.log(alunos);

// Adicionando um valor no array, serão adicionados ao final do array
alunos[3] = 'Luisa'; // Primeira forma não muito utilizada
alunos[alunos.length] = 'José'; // Segunda forma e mais segura.
alunos[alunos.length] = 'André';
alunos.push('Andreia'); // Adicionar valores por função, GRANDE MAIORIA DAS VEZES SERÁ UTILIZADO DESTA FORMA
console.log(alunos);

// Remove um valor no array no final
let removido = alunos.pop(); // Remove o último valor do array e salva em uma variável
console.log(removido)
console.log(alunos);

// Adicionando um valor no array, serão adicionados no começo do array
alunos.unshift('Luiza');
console.log(alunos);

// Remove um valor no array no começo
removido += alunos.shift(); // Remove o primeiro valor do array e salva em uma variável
console.log(removido)
console.log(alunos);

// Deleta um o valor de indice dentro do array
delete alunos[1]; // Ao deletar o valor, o indice permanece existindo no array, mas com o valor de undefined.
console.log(alunos);

// Fatiando um array
console.log(alunos.slice(0, 3)); // Mesma função das strings, seleciona tudo do indice 0 até o 3, lembrando que o indeice 3 não é adicionar por ser o último listado.
console.log(alunos.slice(0, -2)); // Mesma função das strings, seleciona tudo do indice 0 até o -2

// Verifica o tamanho do array
console.log(alunos.length)

// Confirma que está trabalhando com array
console.log(alunos instanceof Array); // Retorna valor booleano
