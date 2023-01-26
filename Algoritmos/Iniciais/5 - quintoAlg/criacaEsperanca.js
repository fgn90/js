console.log(`-------------------`)
console.log(` CRIANÇA ESPERANÇA `)
console.log(`-------------------`)
console.log(`Muito obrigado por ajudar!`)
console.log(`[1] para doar R$10`)
console.log(`[2] para doar R$25`)
console.log(`[3] para doar R$50`)
console.log(`[4] para doar outros valores`)
console.log(`[5] para cancelar`)

let valor = 6;

switch (valor) {
    case 1:
        valor = 10;
        console.log(`-------------------`)
        console.log(`SUA DOAÇÃO FOI DE R$${valor}.`)
        console.log(`MUITO OBRIGADO!`)
        console.log(`-------------------`)
        break;

    case 2:
        valor = 25;
        console.log(`-------------------`)
        console.log(`SUA DOAÇÃO FOI DE R$${valor}.`)
        console.log(`MUITO OBRIGADO!`)
        console.log(`-------------------`)
        break;

    case 3:
        valor = 50;
        console.log(`-------------------`)
        console.log(`SUA DOAÇÃO FOI DE R$${valor}.`)
        console.log(`MUITO OBRIGADO!`)
        console.log(`-------------------`)
        break;
    
    default:
        if ((valor > 3) && (valor < 5)) {
            valor = 10;
            console.log(`-------------------`)
            console.log(`INSIRA O VALOR`)
            console.log(`MUITO OBRIGADO!`)
            console.log(`-------------------`)    
        } else {
            console.log(`--------------------------------------------------------------`)
            console.log(`OPERAÇÃO CANCELADA`)
            console.log(`AGRADECEMOS MESMO ASSIM, SE POSSÍVEL INDIQUE PARA SEUS AMIGOS.`)
            console.log(`--------------------------------------------------------------`)    
        }
        break;
}


