// Criação de função
function saudação(nome) {

    return `Bom dia, ${nome}!`
}

function soma(x = 1,y = 1)// Declarando valores padrões para o parâmetro 
{
    const res = x + y;
    return res
}

// Criação de funções 2 - Funções anonimas
const raiz = function (n) {
    return n ** 0.5;
};

// Criação de funções 2 - Funções anonimas e simplificadas
const raizDois = n => n ** 0.5;


console.log(raiz(9));
console.log(raizDois(16));
console.log(raiz(25));

console.log(soma(2, 2));


// Chamando a função para execução 
const variavel =  saudação('Carlos');
console.log(variavel)

