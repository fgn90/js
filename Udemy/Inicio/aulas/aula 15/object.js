// Função para criação de pessoas
function criaPessoa (nome, sobrenome, idade) {
    // O objeto se encontra dentro do return
    return {
        nome, sobrenome, idade // É igual a ele mesmo, por exemplo, nome: nome, sobrenome: sobrenome, idade: idade.
    };
}

const pessoa1 = criaPessoa('Luiz', 'Augusto', 30);
const pessoa2 = criaPessoa('Roberto', 'Araújo', 20);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa1)

// Outro tipo de objeto
const pessoa3 = { 
    nome: 'Rose',
    sobrenome: 'Maria',
    idade: 40,

    fala() // Método para alguma ação, muito similar a uma function
    {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`); // Nesse exemplo, o this é como se fosse o pessoa3, que é o objeto
    },

    idadeAtual() {
        console.log(`A minha idade atual é ${this.idade}`); // Nesse exemplo, o this é como se fosse o pessoa3, que é o objeto
    },
    
    // Incrementa a idade e joga na tela
    incrementaIdade() {
        ++this.idade;
        console.log(`Agora é ${this.idade}`); // Nesse exemplo, o this é como se fosse o pessoa3, que é o objeto
    }

};

pessoa3.fala()
pessoa3.idadeAtual()
pessoa3.incrementaIdade()
