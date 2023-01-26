const l1 = 12
const l2 = 12
const l3 = 10

function triangulo() {

    // função para validar se os valores inseridos formam um triangulo.
    function eTriang() {
        if ((l1 <= l2 + l3) && (l2 <= l1 + l3) && l3 <= l2 + l1) {
            return qualtriangulo()
        } else {
            return console.log(`Não é triangulo.`)
        };
    };

    // função para verificar qual triangulo é
    function qualtriangulo() {

        if ((l1 == l2) && (l2 == l3)) 
        {
            console.log(`O triangulo é EQUILÁTERO`);
        } 
        else if ((l1 != l2) && (l2 != l3) && (l1 != l3))
        {
            console.log(`O triangulo é ESCALENO`);
        } 
        else if (((l1 + l2) != l3) && ((l1 + l3) != l2) && ((l2 + l3) != l1))
        {
            console.log(`O triangulo é ISOSCELES`);
        }
        else {
            return console.log(`ERROR`)
        }
    };

    eTriang();
};

console.log(`O valor de l1 é: ${l1}`)
console.log(`O valor de l2 é: ${l2}`)
console.log(`O valor de l3 é: ${l3}`)
triangulo();
