function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO - Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'homem'
                
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'img/foto-bebe-m.png')
                } else if (idade < 21) {
                    img.setAttribute('src', 'img/foto-jovem-m.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'img/foto-adulto-m.png')
                } else {
                    img.setAttribute('src', 'img/foto-idoso-m.png')
                }

        } else if (fsex[1].checked) {
            gen = 'mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }

            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.` + `\n`
        res.appendChild(img)
        
    }
}