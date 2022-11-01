const form = window.document.querySelector('.form');

form.addEventListener('submit', function(evento) { // Função para capturar o evento
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#input-peso');
    const inputAltura = evento.target.querySelector('#input-altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { // Verifica se o peso é diferente de um valor numérico. Pois após a conversão para Number, uma string passa a ser NaN e NaN é um false.
        setRes('Peso inválido', false);
        return; // return dentro de uma função interrompe a execução do restante do código. 
    }

    if (!altura) {
        setRes('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setRes(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ];

    if (imc >= 39.9) { // Não precisa de else, pois com o return verdadeiro a função já será interrompida.
        return nivel[5];
    } 

    if (imc >= 34.9) return nivel[4]; // Uma facilidade do JS (NÃO RECOMENDADO) é a não necessidade de separa o if em blocos de código.
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){ // Função para criação de parágrafos
    const p = window.document.createElement('p'); 
   //p.classList.add(className); // Atribui a classe p-res dentro do paragrafo criado.
    return p;
}

function setRes (msg, isValid) { //Função para zerar o html de res e atribuir um filho dentro da div
    const res = window.document.querySelector('.res');
    res.innerHTML = '';

    const p = criaP();

    if (isValid) {
    p.classList.add('p-res');
    } else {
    p.classList.add('bad');
    }

    p.innerHTML = msg;
    res.appendChild(p); // Insere um elemento filho dentro da div

}
