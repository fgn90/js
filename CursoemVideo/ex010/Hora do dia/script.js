function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()



    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/morning.png'
        document.body.style.background = '#B7782A'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/afternoon.png'
        document.body.style.background = '#FAAD42'
    } else {
        img.src = 'img/evening.png'
        document.body.style.background = '#BE99BD'
    }
}