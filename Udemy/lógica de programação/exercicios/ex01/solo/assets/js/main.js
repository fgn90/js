function enviaForm(){
    const form = window.document.querySelector('.form');
    const res = window.document.querySelector('.res');

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        let peso = window.document.querySelector('#input-peso');
        let altura = window.document.querySelector('#input-altura');
        
        peso = parseInt(peso.value);
        altura = parseFloat(altura.value);

        if (!peso) { // Verifica se o peso é diferente de um valor numérico. Pois após a conversão para Number, uma string passa a ser NaN e NaN é um false.
            res.innerHTML = `<p>Seu peso é inválido.</p>`;
            res.style.background = "#fc6060";
            return; // return dentro de uma função interrompe a execução do restante do código. 
        }
        
        if (!altura) { // Verifica se o peso é diferente de um valor numérico. Pois após a conversão para Number, uma string passa a ser NaN e NaN é um false.
            res.innerHTML = `<p>Sua altura é inválida.</p>`;
            res.style.background = "#fc6060";
            return; // return dentro de uma função interrompe a execução do restante do código. 
        }

        let imc = peso/(altura*altura);
        imc = imc.toFixed(2)

        if (imc >= 16 && imc <= 18.5){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Abaixo do peso)</p>`;
            res.style.background = "#faebd7";
        } 
        else if (imc >= 18.5 && imc <= 24.9){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Peso normal)</p>`;
            res.style.background = "#faebd7";
        }
        else if (imc >= 25 && imc <= 29.9){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Sobrepeso)</p>`;
            res.style.background = "#faebd7";
        }
        else if (imc >= 30 && imc <= 34.9){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 1)</p>`;
            res.style.background = "#faebd7";
        }
        else if (imc >= 35 && imc <= 39.9){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 2)</p>`;
            res.style.background = "#faebd7";
        }
        else if (imc >= 40 && imc <= 50){
            res.innerHTML = `<p>Seu IMC é: ${imc} (Obesidade grau 3)</p>`;
            res.style.background = "#faebd7";
        } else {
            res.innerHTML = `<p>Valor de IMC inválido!</p>`;
            res.style.background = "red"; 
        }

    });

};

enviaForm();