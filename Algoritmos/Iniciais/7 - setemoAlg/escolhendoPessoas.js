let resp;
let contM = 0;
let contF = 0;

do {
    let sexo = prompt(`Digite o sexo da pessoa: [M/F]`)
    let idade = prompt(`Digite a idade da pessoa:`)
    let corCabelo = prompt(`Qual a cor do cabelo? 
[1] Preto
[2] Castanho
[3] Loiro
[4] Ruivo`)
    resp = prompt(`Deseja continuar? [S/N]`)

    if ((sexo == 'M') && idade > 18 && corCabelo == 2) {
        contM++;
    }
    
    if ((sexo == 'F') && (idade > 25) && (idade < 30) && (corCabelo == 3)) {
        contF++;
    }

} while (resp != 'N')
    
alert(`O total de homens maiores de 18 anos com cabelos castanhos foi: ${contM}
O total de mulheres entre 25 e 30 anos com cabelos loiros foi: ${contF}`)

