let contador = 0;
let aluno;
let quantAlunos = prompt(`Quantos alunos estão na turma?`);
let maior = 0;
let nota = 0;

while (contador < quantAlunos) {
    
    if (aluno == 0) {
        aluno = prompt(`Insira um Aluno:`);
        nota = prompt(`Insira a nota do Aluno:`);
    } else {
        aluno = prompt(`Insira um outro Aluno:`);
        nota = prompt(`Insira a nota do Aluno:`);
    };
    if (nota > maior) {
        maior = nota
    }
    contador++;
}

alert(`O aluno com maior produtividade foi ${aluno} com a nota: ${maior}.`)