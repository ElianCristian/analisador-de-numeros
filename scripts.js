let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
let resultado = document.querySelector('div#res')
let vetor = []

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
        item.text = `${pos} - Inserido o ${num.value}`
        lista.appendChild(item)
        resultado.innerHTML = '' // caso eu tenha selecionado "Finalizar" na tela e em seguida adicionar um numero
    }
    else{
        alert(`[${Number(num.value)}] Valor invalido ou já se encontra na lista`)
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (vetor.length == 0) {
        alert('A lista está vazia')
    } else {
        let totElementos = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        
        for(let pos in vetor){
            soma += vetor[pos]

            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }

        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Total de elementos: ${totElementos} </p>`
        resultado.innerHTML += `<p> Maior valor encontrado: ${maior}</p>`
        resultado.innerHTML += `<p>Menor valor encontrado: ${menor}</p>`
        resultado.innerHTML += `<p>Soma de todos os valores: ${soma}</p>`
        resultado.innerHTML += `<p>Média dos valores: ${soma/totElementos}</p>`
    }
}