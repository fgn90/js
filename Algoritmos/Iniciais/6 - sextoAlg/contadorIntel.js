let inicio = 8;
let fim = 0;
let guarda = 0;

console.log(`---------------`)
console.log(`C O N T A N D O`)
console.log(`---------------`)

if (inicio >= fim) {
    while (inicio > fim) {
        console.log(inicio, '..')
        inicio--;
        guarda = inicio;
        
    }
} else {
    while (inicio <= fim) {
        console.log(inicio, '..')
        inicio++;
        guarda = inicio;
        
    }
}
