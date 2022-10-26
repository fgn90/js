const n1 = Number(window.prompt(`Digite um número:`));

const numero = window.document.getElementById('numero-titulo'); // Seleciona o elemento pelo ID definido no HTML e o coloca em uma variável.
const texto = window.document.getElementById('texto');

numero.innerHTML = n1; // Pega a variável dentro o HTML e coloca o valor de n1.
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${n1 ** 0.5} </p>`;
texto.innerHTML += `<p>Seu número é um número inteiro? ${Number.isInteger(n1)}</p>`;
texto.innerHTML += `<p>O valor digitado não é um número? ${Number.isNaN(n1)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo: ${Math.floor(n1)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para cima: ${Math.ceil(n1)}</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais: ${n1.toFixed(2)}</p>`;
