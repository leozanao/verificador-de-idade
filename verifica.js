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
        res.innerHTML = `Sua idade é ${idade}`
        if (fsex[0].checked){
            genero = 'Homem'
        }else {
            genero = 'Mulher'
        }
        res.innerHTML = `Você é ${genero} e sua idade é ${idade} anos.`
    }
}