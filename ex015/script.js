function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#b5b79c'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'imagens/tardevdd.png'
        document.body.style.background = '#f9bc88'
    } else {
        //Boa noite
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#150f29'
    }
}

