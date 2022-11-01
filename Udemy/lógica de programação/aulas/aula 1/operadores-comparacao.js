/*
Operadores de comparação:

****SEMPRE SERÃO RETORNADOS VALORES DO TIPO BOOLEAN****

> - maior que
>= - maior ou igual a 
< - menor que
<= - menor ou igual a
== - igualdade (valor, não recomendado de se utilizar)
=== - igualdade estrita (valor e tipo)
!= - diferente (valor, não recomendado de se utilizar)
!== - diferente estrito (valor e tipo)
*/

//MAIOR QUE
const comp = 10 > 5;
console.log(comp);

//MAIOR OU IGUAL A
const compUm = 10 >= 5;
console.log(compUm);

//MENOR QUE
const compDois = 10 < 10;
console.log(compDois);

//MENOR OU IGUAL A
const compTres = 10 <= 10;
console.log(compTres);

//É IGUAL A - NÃO RECOMENDADA A UTILIZAÇÃO
const compQuatro = 10 == '10';
console.log(compQuatro);


//É ESTRITAMENTE IGUAL A - Tanto valores quanto os tipos são iguais
const compCinco = 10 === '10';
console.log(compCinco);

//É DIFERENTE DE - NÃO RECOMENDADA A UTILIZAÇÃO
const compSeis = 10 != '10';
console.log(compSeis);


//É ESTRITAMENTE DIFERENTE A - Tanto valores quanto os tipos são diferentes
const compSete = 10 !== '10';
console.log(compSete);
