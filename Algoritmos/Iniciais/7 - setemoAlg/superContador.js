// Função para somar de 1 até 10, enquanto contador for menor ou igual a 10.
function soma() {
    cont = 1;
    teste = []; //Criar array para que os números fiquem um do lado do outro no alert
    do {
        t = cont++; // Variável para armazenar valor atual do cont
        teste.push(t); // Adicionar valor atual do cont no array
    } while (cont <= 10);
    alert(teste.join('.. ')); // Demonstrar valor do array separado por '.. '
}

// Função para subtrair de 1 até 10, enquanto contador for maior ou igual a  1.
function sub() {
    cont = 10;
    teste = [];
    do {
        t = cont--;
        teste.push(t);
    } while (cont >= 1);
    alert(teste.join('.. '));
}

// Repetição do menu até que o valor inserido seja 3 para que possa sair do looping.
do {
        escolha = prompt(`
    ================= |         M E N U         | =================

    |=================|   [1] De 1 a 10        |=================|
    |=================|   [2] De 10 a 1        |=================|
    |=================|   [3] Sair                 |=================|
    `)

    if (escolha == 1) {
        soma(); //Chamar função de soma
    } else if (escolha == 2) {
        sub(); // Chamar função de subtração
    }

} while (escolha != 3)
alert(`Saindo...`)

