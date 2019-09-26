function Analisar() {
    let num = document.getElementById('num')
    let numero = Number(num.value)
    if (num.value == '' || num.value > 100) {
        alert('Preencha o campo corretamente')
    }
    else{
        alert('Tudo certo')
    }
}