function enviaForm() {
    const form = window.document.querySelector('.form'); // Inserindo a classe form na variável
    const res = window.document.querySelector('.res');

    const listaPessoas = [];

    
/* Uma das formas de interromper o envio do formulário padrão quando clicar no button submit

    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1);
    };
*/
/* Segunda forma e mais moderna para o mesmo feito da de cima, interromper o envio padrão do formulário ao clicar no botão.
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        console.log('Form não enviado')
    });
*/


    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.iNome')
        const sobrenome = form.querySelector('.iSobrenome')
        const peso = form.querySelector('.iPeso')
        const altura = form.querySelector('.iAltura')

        listaPessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }),

        console.log(listaPessoas)

        res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p><br/>`; 
    });

};

enviaForm();