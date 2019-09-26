let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#res')
let vetor = []

/* function Adicionar () {
   let numero = Number(num.value)
    console.log(numero)  
}
*/

function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, vet) {
    if (vet.indexOf(Number(n)) != -1){ // verifica se o valor n esta no vetor
        return true
    }
    else{
        return false
    }
}

function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let pos = vetor.length
        let item = document.createElement('option')
        item.text = `Inserido o ${vetor[pos -1]}`
        lista.appendChild(item)
    }
    else{
        alert(`[${Number(num.value)}] Valor invalido ou já se encontra na lista`)
    }
    num.value = ''
    num.focus()
}