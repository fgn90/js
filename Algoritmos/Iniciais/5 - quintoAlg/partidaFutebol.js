console.log(`   BANGU x MADUREIRA   `)
console.log(`-----------------------`)

let golsB = 1;
let golsM = 10;
let dif = Math.abs(golsB - golsM);

if ((dif > 0) && (dif <= 3)) {
    console.log(`DIFERENÇA: ${dif}`)
    console.log(`STATUS: PARTIDA NORMAL`)
    console.log(`-----------------------`)
} 
else if (dif == 0) {
    console.log(`DIFERENÇA: ${dif}`)
    console.log(`STATUS: EMPATE`)
    console.log(`-----------------------`)
} else {
    console.log(`DIFERENÇA: ${dif}`)
    console.log(`STATUS: GOLEADA`)
    console.log(`-----------------------`)
}

switch (dif) {
    case 0:
        console.log(`DIFERENÇA: ${dif}`)
        console.log(`STATUS: EMPATE`)
        console.log(`-----------------------`)
        break;
    
    case 1:
    case 2:
    case 3:
        console.log(`DIFERENÇA: ${dif}`)
        console.log(`STATUS: PARTIDA NORMAL`)
        console.log(`-----------------------`)
    default:
        if (dif > 3) {
            console.log(`DIFERENÇA: ${dif}`)
            console.log(`STATUS: GOLEADA`)
            console.log(`-----------------------`)
        break;
}
}