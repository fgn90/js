const umVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // uma lista ordenada.

function buscaBinaria(umVetor, item) {

    let prim = 0; // primeiro valor.
    let ult = umVetor.length -1; // último valor - 1, pois o índice começa em 0.
    let achou = false; // operador que informará se o valor foi encontrado ou não.

    // enquanto o primeiro número for menor ou igual ao último repete.
    while (prim <= ult && !achou) {
        meioLista = Math.ceil((prim + ult) / 2); //Linha para achar o meio da lista. meioLista recebe o resultado arredondado de (prim + ult)/2 .
        if (umVetor[meioLista] == item ) // retorna como verdade quando o número for encontrado.
        {
            achou = true;
        } else
        {
            if (item < umVetor[meioLista]) // se o item for menor que o meio da lista, o último valor é atualizado com o valor original - 1
            {
                ult = meioLista - 1;
            }
            else { // se o item for maior que o meio da lista, o primeiro valor é atualizado com o valor original + 1
                prim = meioLista + 1;
            }
        }
    }

    if (achou == true) {
        console.log(`O valor ${item} se encontra na lista`);
    } else {
        console.log(`O valor não foi encontrado na lista`);
    }
}

buscaBinaria(umVetor, 11);

