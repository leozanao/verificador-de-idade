function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value >= ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        res.innerHTML = `Sua idade é ${idade}`
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>0 && idade<=5){
                img.setAttribute('src', 'imagens/bebe-menino.png')

            }
            else if(idade<16){
                img.setAttribute('src', 'imagens/jovem-boy.png')
            }else{
                img.setAttribute('src', 'imagens/homem.png')
            }

        }else {
            genero = 'Mulher'
            if(idade>0 && idade<=5){
                img.setAttribute('src', 'imagens/bebe-menina.png')

            }
            else if(idade<16){
                img.setAttribute('src', 'imagens/jovem-girl.png')
            }else{
                img.setAttribute('src', 'imagens/mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e sua idade é ${idade} anos.`
        res.appendChild(img)
    }
}