function contar() {
        
    var start = document.getElementById('txti')
    var end = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] Faltam dados!') // Teste do erro, se estiver certo ele pula para o else
        //res.innerHTML('Impossível contar!')
    } else {
        res.innerHTML = 'Contando: <br>' // É possível utilizar comandos html quando é utilizado o 'innerHTML'.
        let s = Number(start.value) // Convertendo os valores das variáveis declaradas lá em cima, pq sempre vem como string e não Number.
        let e = Number(end.value)
        let p = Number(pass.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        } 
        
        if (s < e) {
            //Contagem crescente
            for(let c = s; c <= e; c += p) 
        /* 
        Inicio = Declara a variável c (contador) recebendo o valor de i (valor inicial);
        Teste = Se o valor c for menor ou igual ao valor de e (valor final declarado), o teste é verdadeiro;
        Incremento = c recebe ele + o valor de p
        */
            {
            res.innerHTML += ` ${c} \u{1F449}` // Retorna o valor já declarado de res concatenando com o valor de c
            }
        } else {
            // Contagem regressiva
            for(let c = s; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        res.innerHTML += `\u{1F3C1}`
    }
}