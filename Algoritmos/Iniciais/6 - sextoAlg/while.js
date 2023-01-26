
let contador = 1;
let valor = 100;
let salto = 10;
let soma = 0;
let maior = 0;

//somando
/*while (contador <= valor) {   
    console.log(contador);
    contador = contador+ salto;
}*/

//subtraindo
/*while (contador >= valor) {
    console.log(contador);
    contador - salto;
}*/

// Somador numérico

while (contador <= 10) {
    console.log(contador, soma)
        if (contador > maior) {
            maior = contador
        }
    contador++;
    soma =  contador;
    soma++;

}
console.log('aaa', maior)