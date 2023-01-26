
let sal = 1000;
let dep = 7;
let nSal

switch (dep) {
    case 0:
        nSal = sal + ((sal*5)/100)
        break;

    case 1: 
    case 2:
    case 3:
        nSal = sal + ((sal*10)/100)
        break;
        
    case 4:
    case 5:
    case 6:
        nSal = sal + ((sal*15)/100)
        break;
        
    default:
        nSal = sal + ((sal*18)/100)
        break;

}

console.log(`Seu novo salário é: R$${nSal}`)


